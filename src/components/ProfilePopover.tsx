import * as React from "react";
import Popover from "@mui/material/Popover";
import { RootState, AppDispatch } from "../store";
// Import your custom icons/components
import { ReactComponent as DownArrow } from "../assets/icons/DownArrow.svg";
import { ReactComponent as Profile } from "../assets/icons/Profile.svg";
import { ReactComponent as ProfilePlaceholder } from "../assets/icons/ProfilePlaceholder.svg";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import { logout } from "../redux/slices/authSlice";

export default function BasicPopover() {
	const dispatch = useDispatch<AppDispatch>();
	const { user } = useSelector((state: RootState) => state.auth);
	// Change the type from HTMLButtonElement to HTMLDivElement
	const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

	// Update the event type from HTMLButtonElement to HTMLDivElement
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<>
			<div
				className="flex flex-row justify-center items-center rounded-full h-full pl-3 pr-1 py-[6px] bg-white gap-x-[9px]"
				onClick={handleClick}
			>
				<DownArrow />
				<Profile height="100%" width="100%" />
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				className="mt-2"
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<div className="min-w-fit w-[175px] py-2 px-4">
					<div className="my-1 flex flex-row">
						<ProfilePlaceholder />
						<span className="ml-2">{user?.name}</span>
					</div>
					<Divider />
					<div
						className="mt-2 cursor-pointer"
						onClick={() => dispatch(logout())}
					>
						<span>Logout</span>
					</div>
				</div>
			</Popover>
		</>
	);
}
