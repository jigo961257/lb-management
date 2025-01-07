import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ArrowLeft, ArrowRight, Edit2, Eye, Trash2, UploadIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useDropzone } from "react-dropzone"

interface DocumentType {
    file: File;
    preview: string;
}

interface FinalDocuments extends DocumentType {
    fileType: string;
}

const DocumentsTab2 = ({ setActiveTab }: { setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
    const [documents, setDocuments] = useState<FinalDocuments[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<DocumentType | null>(null);
    const [documentType, setDocumentType] = useState("none");

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles[0]) {
            const file = acceptedFiles[0];
            setSelectedFile({
                file,
                preview: URL.createObjectURL(file)
            });
        }
    }

    const { getRootProps, getInputProps, inputRef } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        maxSize: 2 * 1024 * 1024 // 2MB
    })

    const handleUpload = () => {
        if (selectedFile) {
            setDocuments([...documents, { ...selectedFile, fileType: documentType }])
            setSelectedFile(null)
            setIsDialogOpen(false)
            setDocumentType("none")
        }
    }

    // Cleanup object URLs on unmount
    useEffect(() => {
        return () => {
            documents.forEach(doc => URL.revokeObjectURL(doc.preview))
            if (selectedFile) {
                URL.revokeObjectURL(selectedFile.preview)
            }
        }
    }, [])

    const handleDelete = (index: number) => {
        URL.revokeObjectURL(documents[index].preview)
        setDocuments(documents.filter((_, i) => i !== index))
    }

    const DocumentImageComponent = ({ doc, index }: { doc: FinalDocuments, index: number }) => {
        return (
            <section className='relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-blue-200 h-60 w-60 flex flex-col'>
                <section className='h-[83%] relative aspect-[4/3] p-2'>
                    <img
                        src={doc.preview}
                        alt={doc.file.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </section>
                <section className='text-center p-2 bg-[#67A7FD33] text-black overflow-hidden whitespace-nowrap text-ellipsis max-w-full'>
                    {doc.fileType || "file name"}
                </section>

                <section className='absolute top-2 right-2 flex flex-col gap-2'>
                    <button className='bg-white rounded-full shadow-sm transition-shadow h-5 w-5'>
                        <Edit2 className='text-blue-500 w-5 h-5' />
                    </button>
                    <button
                        className='bg-white rounded-full shadow-sm transition-shadow h-5 w-5'
                        onClick={() => handleDelete(index)}
                    >
                        <Trash2 className='text-red-500 h-5 w-5' />
                    </button>
                    <button className='bg-white rounded-full shadow-sm transition-shadow h-5 w-5'>
                        <Eye className='text-blue-500 h-5 w-5' />
                    </button>
                </section>
            </section>
        )
    }

    return (
        <div className="px-10 pb-10">
            <Dialog open={isDialogOpen} onOpenChange={(status) => {
                setIsDialogOpen(status)
                if (!status) {
                    if (selectedFile) {
                        URL.revokeObjectURL(selectedFile.preview)
                    }
                    setSelectedFile(null)
                    setDocumentType("none");
                }
                inputRef.current?.setAttribute('value', '');
            }}>
                <button className="flex items-center gap-2"
                    onClick={() => setActiveTab('nominee-details')}
                >
                    <ArrowLeft className="h-5 w-5" />
                    <h2 className="text-sm font-semibold">Back</h2>
                </button>
                <div className='flex justify-end items-center'>
                    <DialogTrigger asChild>
                        <button className='bg-[#2F80ED0D] text-[#2F80ED] px-4 py-2 rounded-full mt-5 flex'
                            onClick={() => {
                                setIsDialogOpen(true)
                            }}
                        >
                            <span>Upload</span>
                            <UploadIcon className='w-5 h-5 ml-2' />
                        </button>
                    </DialogTrigger>
                </div>

                <section className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 shadow-point-shadow bg-white p-4 rounded-lg'>
                    {documents.length > 0 ?
                        documents.map((doc, index) => (
                            <DocumentImageComponent key={index} doc={doc} index={index} />
                        )) :
                        <p className='col-span-4 text-center text-[#2F80ED] py-10'>No documents uploaded</p>
                    }
                </section>
                <DialogContent className='bg-white'>
                    <DialogHeader>
                        <DialogTitle>Upload Document</DialogTitle>
                    </DialogHeader>
                    <div {...getRootProps()} className='p-4 rounded-lg cursor-pointer h-[259px] bg-[#67A7FD1A] flex justify-center items-center'>
                        <input {...getInputProps()} />
                        {selectedFile ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={selectedFile.preview}
                                    alt={selectedFile.file.name}
                                    className="max-h-full max-w-full object-contain rounded-lg"
                                />
                            </div>
                        ) : (
                            <section className='flex gap-2 flex-col items-center'>
                                <UploadIcon className='text-[#2F80ED] h-10 w-10' />
                                <h4 className='font-medium text-[#2F80ED]'>Upload Image</h4>
                                <p className='flex text-black text-xs gap-1'>Image Size must be less than <span className='font-semibold'>2MB</span></p>
                            </section>
                        )}
                    </div>
                    <section className='flex gap-2 items-center'>
                        <div className='flex-1'>
                            <label className='block mb-2'>Image Type</label>
                            <select className='border p-2 rounded w-full'
                                defaultValue={"none"}
                                value={documentType}
                                onChangeCapture={(e) => { setDocumentType(e.currentTarget.value) }}
                            >
                                <option value='none'>Select Image Type</option>
                                <option value='passport'>Passport</option>
                                <option value='id'>ID Card</option>
                                <option value='license'>Driver's License</option>
                            </select>
                        </div>
                        <div className=''>
                            <button
                                className='bg-[#2F80ED0D] text-[#2F80ED] px-4 py-2 rounded-full mt-5 flex'
                                onClick={handleUpload}
                                disabled={!selectedFile}
                            >
                                <span>Upload</span>
                            </button>
                        </div>
                    </section>
                </DialogContent>
            </Dialog>
            <section className='flex items-center justify-between w-full mt-5'>

                <section className='flex items-center gap-2'>
                    <ArrowLeft className='h-5 w-5 text-blue-500' />
                    <button type="button" className="text-blue-500 rounded">Save & Go to Main</button>
                </section>
                <button type="submit" className='flex items-center py-2 px-4 bg-[#3FA8350D] gap-2 text-[#3FA835]'
                    onClick={() => {
                        setActiveTab("work-details")
                    }}
                >
                    {/* className=" text-[#3FA835] rounded">Next</button> */}
                    Next
                    <ArrowRight className='h-5 w-5 text-[#3FA835]' />
                </button>
            </section>
        </div>
    )
}

export default DocumentsTab2