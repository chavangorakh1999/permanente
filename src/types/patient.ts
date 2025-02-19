export interface Patient {
	id: string;
	aptDate: string;
	aptTime: string;
	age: string;
	gender: string;
	mrn: string;
	honorific: string;
	name: string;
	email: string;
	phone: string;
	weight: string;
	bloodGroup: string;
	risk: string;
	noShow: string;
	isScheduled: boolean;
	patientId: string;
	a1: string;
	a2: string;
	a3: string;
	a4: string;
	a5: string;
	a6: string;
	a7: string;
	a8: string;
	agentStatus: {
		agentStatusId: string;
		agentStatus: string;
	};
	patientStatus: {
		patientStatusId: string;
		patientStatus: string;
	};
	imageUrl: string;
}
