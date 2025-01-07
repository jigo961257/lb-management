import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

	const navigation = useNavigate();

	const metrics = [
		{ title: "Total Company", value: "57", color: "text-orange-500" },
		{ title: "Total Registered Labour", value: "216", color: "text-blue-500" },
		{ title: "Total Expense", value: "₹ 6,789", color: "text-red-500", subtext: "Today's Expense: ₹ 540/-" },
		{ title: "Total Compliance", value: "₹ 12,500", color: "text-green-500", subtext: "Today's Compliance: ₹ 540/-" },
	];

	const notes = Array.from({ length: 11 }, (_, i) => ({
		id: i + 1,
		title: `Note ${i + 1}`,
		description: "Description",
	}));

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
				{metrics.map((metric, index) => (
					<Card key={index} className="shadow-lg flex flex-col items-center justify-center"> {/* Center the card contents */}
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{metric.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col items-center justify-center"> {/* Center contents in CardContent */}
							<div className={`text-2xl font-bold ${metric.color}`}>
								{metric.value}
							</div>
							{metric.subtext && (
								<p className="text-xs text-muted-foreground mt-1 text-center"> {/* Center text */}
									{metric.subtext}
								</p>
							)}
						</CardContent>
					</Card>
				))}
			</div>

			<div className="flex justify-end mb-4">
				<Button className="bg-blue-500 hover:bg-blue-600 text-white"
					onClick={() => {
						navigation("/labour-registration");
					}}
				>
					{/* <UserPlus className="mr-2 h-4 w-4" /> Add Labour */}
					Add Labour<span className="ml-2"><FontAwesomeIcon icon={faUserPlus} /></span>
				</Button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card className="col-span-1 h-full"> {/* Ensure the card takes full height of its container */}
					<CardHeader>
						<CardTitle>Notes</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col"> {/* Make CardContent a flex container */}
						<div className="flex-1 overflow-y-auto pr-4"> {/* Enable scrolling */}
							{notes.map((note) => (
								<div key={note.id} className="mb-4 last:mb-0 pl-2.5 bg-gray-50 flex justify-between">
									<div>
										<h3 className="text-sm font-semibold">{note.title}</h3>
										<p className="text-sm text-gray-100">{note.description}</p>
									</div>
									<div className='pr-2.5 flex items-center'>
										<FontAwesomeIcon icon={faGreaterThan} />
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				<Card className="col-span-1 h-full"> {/* Ensure the card takes full height of its container */}
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle>Man Power Report</CardTitle>
						<div className="text-2xl font-bold text-green-500">153</div>
					</CardHeader>
					<CardContent className="flex flex-col"> {/* Make CardContent a flex container */}
						<div className="flex-1 overflow-y-auto text-center text-gray-500 mt-20"> {/* Enable scrolling */}
							No data available
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;