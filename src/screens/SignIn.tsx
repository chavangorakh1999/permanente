import React from "react";
import { ReactComponent as WhiteLogo } from "../assets/icons/WhiteLogo.svg";

function SignIn() {
	return (
		<div className="h-screen w-full flex justify-center items-center bg-hero-pattern bg-cover">
			<div className="h-[520px] w-[495px] ml-[817px] mt-[145px] flex flex-col items-center">
				<div className="h-[20px] mb-[36px] w-[297px]">
					<WhiteLogo />
				</div>
				<div className="bg-white h-[464px] w-full rounded-lg px-[50px] py-[40px]">
					<h2 className="text-primaryText text-[28px] font-[700] mb-3">
						Sign in
					</h2>
					<p className="text-primaryText text-normal font-light mb-[40px]">
						Welcome to new experience of.....
					</p>
					<form action="">
						<div>
							<div className="mb-[20px]">
								<input
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
									required
									autoComplete="email"
									className="block w-full rounded-sm bg-white p-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-[#B3BAC5] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
							<div className="mb-[20px]">
								<input
									id="password"
									name="password"
									type="text"
									placeholder="Password"
									required
									className="block w-full rounded-sm bg-white p-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-[#B3BAC5] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
							<div className="flex flex-row justify-between">
								<div className=" flex justify-start items-center mb-[40px]">
									<input type="checkbox" name="remember" id="remember" />
									<label
										htmlFor="remember"
										className="text-normal pl-2 text-[#8993A4]"
									>
										Remember me
									</label>
								</div>
								<div className="cursor-pointer">
									<span className="text-[#006CA6]">Forgot password?</span>
								</div>
							</div>
							<div className="h-[56px] w-full rounded-sm bg-[#006CA6] flex justify-center items-center cursor-pointer">
								<span className="text-white text-base font-normal">
									Sign in
								</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
