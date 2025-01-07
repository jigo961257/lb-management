'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Upload, Eye, Edit2, Trash2 } from 'lucide-react'

interface DocumentCard {
	id: string
	title: string
	image: string
	status: 'pending' | 'uploaded'
}

const documents: DocumentCard[] = [
	{ id: '1', title: 'Aadhar Card (Front)', image: '/placeholder.svg?height=200&width=300', status: 'uploaded' },
	{ id: '2', title: 'Aadhar Card (Back)', image: '/placeholder.svg?height=200&width=300', status: 'uploaded' },
	{ id: '3', title: 'PAN Card', image: '/placeholder.svg?height=200&width=300', status: 'uploaded' },
	{ id: '4', title: 'Bank Passbook', image: '/placeholder.svg?height=200&width=300', status: 'pending' },
	{ id: '5', title: 'Driving License (Front)', image: '/placeholder.svg?height=200&width=300', status: 'uploaded' },
	{ id: '6', title: 'Driving License (Back)', image: '/placeholder.svg?height=200&width=300', status: 'pending' },
]

export default function DocumentUpload() {
	return (
		<div className="flex min-h-screen">

			{/* Main Content */}
			<main className="flex-1 p-6	">
				<div className="mb-6 flex items-center justify-between">
					<Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back
					</Button>
					<Button size="sm" className="text-blue-500 bg-blue-50 hover:bg-blue-100 border-0">
						<Upload className="mr-2 h-4 w-4" />
						Upload
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{documents.map((doc) => (
						<div key={doc.id} className="group relative">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
							<Card className="relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-blue-200">
								<CardContent className="p-0">
									<div className="relative aspect-[4/3] bg-gray-50">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={doc.image}
											alt={doc.title}
											className="object-cover w-full h-full rounded-t-lg"
										/>
										<div className="absolute top-2 right-2 flex items-center gap-2">
											<Button
												size="icon"
												variant="secondary"
												className="h-8 w-8 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
											>
												<Edit2 className="h-4 w-4 text-blue-500" />
											</Button>
											<Button
												size="icon"
												variant="secondary"
												className="h-8 w-8 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
											>
												<Eye className="h-4 w-4 text-blue-500" />
											</Button>
											<Button
												size="icon"
												variant="secondary"
												className="h-8 w-8 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
											>
												<Trash2 className="h-4 w-4 text-red-500" />
											</Button>
										</div>
									</div>
									<div className="p-4 bg-white">
										<h3 className="font-medium text-gray-900 text-center">{doc.title}</h3>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				<div className="mt-6 flex items-center justify-between">
					<Button
						variant="outline"
						className="text-blue-500 border-blue-500 hover:bg-blue-50"
					>
						Save & Go to Main
					</Button>
					<Button className="bg-blue-500 hover:bg-blue-600 text-white">
						Next
					</Button>
				</div>
			</main>
		</div>
	)
}

