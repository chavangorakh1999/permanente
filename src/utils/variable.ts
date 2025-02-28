import { Patient } from "../types/patient";
export const data: Patient[] = [
	{
		id: "0001",
		aptDate: "2025-02-12",
		aptTime: "6:00 PM",
		age: "30",
		gender: "Male",
		mrn: "PID0001",
		honorific: "Mr.",
		name: "Jennifer Becker",
		email: "jennifer@gmail.com",
		phone: "+1 753-734-8478",
		weight: "70.4",
		bloodGroup: "O+",
		risk: "Very High",
		noShow: "No",
		isScheduled: true,
		patientId: "PID0001 - Jennifer Becker",
		a1: "success",
		a2: "warning",
		a3: "not_available",
		a4: "waiting",
		a5: "failed",
		a6: "success",
		a7: "warning",
		a8: "not_available",
		agentStatus: {
			agentStatusId: "escalated",
			agentStatus: "escalated",
		},
		patientStatus: {
			patientStatusId: "pending",
			patientStatus: "pending",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "0002",
		aptDate: "2025-02-01",
		aptTime: "8:45 PM",
		age: "35",
		gender: "Female",
		mrn: "PID0002",
		honorific: "Ms.",
		name: "Emma Hernandez",
		email: "emma@gmail.com",
		phone: "+1 797-485-1814",
		weight: "65.0",
		bloodGroup: "A+",
		risk: "Very High",
		noShow: "No",
		isScheduled: true,
		patientId: "PID0002 - Emma Hernandez",
		a1: "failed",
		a2: "success",
		a3: "waiting",
		a4: "warning",
		a5: "not_available",
		a6: "success",
		a7: "failed",
		a8: "waiting",
		agentStatus: {
			agentStatusId: "completed",
			agentStatus: "completed",
		},
		patientStatus: {
			patientStatusId: "confirmed",
			patientStatus: "confirmed",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "0003",
		aptDate: "2025-03-30",
		aptTime: "2:15 PM",
		age: "40",
		gender: "Female",
		mrn: "PID0003",
		honorific: "Ms.",
		name: "Gabriella Robinson",
		email: "gabriella@gmail.com",
		phone: "+1 542-851-1517",
		weight: "68.0",
		bloodGroup: "B+",
		risk: "High",
		noShow: "No",
		isScheduled: true,
		patientId: "PID0003 - Gabriella Robinson",
		a1: "warning",
		a2: "not_available",
		a3: "success",
		a4: "failed",
		a5: "waiting",
		a6: "warning",
		a7: "success",
		a8: "not_available",
		agentStatus: {
			agentStatusId: "rescheduled",
			agentStatus: "rescheduled",
		},
		patientStatus: {
			patientStatusId: "cancelled",
			patientStatus: "cancelled",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "0004",
		aptDate: "2025-01-06",
		aptTime: "7:00 PM",
		age: "45",
		gender: "Male",
		mrn: "PID0004",
		honorific: "Mr.",
		name: "Eric Greer",
		email: "eric@gmail.com",
		phone: "+1 436-945-1093",
		weight: "75.0",
		bloodGroup: "AB+",
		risk: "Very High",
		noShow: "No",
		isScheduled: false,
		patientId: "PID0004 - Eric Greer",
		a1: "success",
		a2: "failed",
		a3: "waiting",
		a4: "not_available",
		a5: "warning",
		a6: "success",
		a7: "failed",
		a8: "waiting",
		agentStatus: {
			agentStatusId: "pending",
			agentStatus: "pending",
		},
		patientStatus: {
			patientStatusId: "rescheduled",
			patientStatus: "rescheduled",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "0005",
		aptDate: "2025-04-02",
		aptTime: "8:45 PM",
		age: "50",
		gender: "Male",
		mrn: "PID0005",
		honorific: "Mr.",
		name: "Thomas Miller",
		email: "thomas@gmail.com",
		phone: "+1 275-767-9077",
		weight: "80.0",
		bloodGroup: "O-",
		risk: "Very High",
		noShow: "No",
		isScheduled: true,
		patientId: "PID0005 - Thomas Miller",
		a1: "not_available",
		a2: "success",
		a3: "warning",
		a4: "failed",
		a5: "waiting",
		a6: "success",
		a7: "not_available",
		a8: "warning",
		agentStatus: {
			agentStatusId: "completed",
			agentStatus: "completed",
		},
		patientStatus: {
			patientStatusId: "confirmed",
			patientStatus: "confirmed",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "0006",
		aptDate: "2025-02-07",
		aptTime: "7:30 AM",
		age: "55",
		gender: "Female",
		mrn: "PID0006",
		honorific: "Ms.",
		name: "Maria Ruiz",
		email: "maria@gmail.com",
		phone: "+1 889-663-8760",
		weight: "60.0",
		bloodGroup: "A-",
		risk: "Medium",
		noShow: "No",
		isScheduled: false,
		patientId: "PID0006 - Maria Ruiz",
		a1: "waiting",
		a2: "success",
		a3: "failed",
		a4: "warning",
		a5: "not_available",
		a6: "success",
		a7: "waiting",
		a8: "failed",
		agentStatus: {
			agentStatusId: "escalated",
			agentStatus: "escalated",
		},
		patientStatus: {
			patientStatusId: "pending",
			patientStatus: "pending",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
];
