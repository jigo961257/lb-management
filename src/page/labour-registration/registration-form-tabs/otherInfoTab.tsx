import { Button } from "@/components/ui/button"; // Ensure this import path is correct

// Define the props interface
interface OtherInfoTabProps {
    setActiveTab: (tab: string) => void; // Correctly type setActiveTab
}

const OtherInfoTab = ({ setActiveTab }: OtherInfoTabProps) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Welcome</h2>
            {/* Buttons */}
            <div className="flex justify-between mt-6">
                <Button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800">
                    ← Save & Go to Main
                </Button>
                <div>
                    <Button
                        type="button"
                        onClick={() => setActiveTab("workDetails")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 mr-2"
                    >
                        ← Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OtherInfoTab;
