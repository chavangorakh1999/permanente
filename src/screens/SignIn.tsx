import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store"; // Adjust the path as needed
import { login } from "../redux/slices/authSlice";
import { ReactComponent as WhiteLogo } from "../assets/icons/WhiteLogo.svg";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/SlideUp";

function SignIn() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { loading, error } = useSelector((state: RootState) => state.auth);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	const togglePassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (rememberMe) {
			localStorage.setItem("rememberedEmail", email);
		} else {
			localStorage.removeItem("rememberedEmail");
		}
		const resultAction = await dispatch(login({ email, password }));
		if (login.fulfilled.match(resultAction)) {
			navigate("/dashboard");
		}
	};
	useEffect(() => {
		const storedEmail = localStorage.getItem("rememberedEmail");
		if (storedEmail) {
			setEmail(storedEmail);
			setRememberMe(true);
		}
	}, []);

	return (
		<div className="relative h-screen w-full flex justify-center items-center bg-hero-pattern bg-cover">
			<motion.div
				className="absolute h-[520px] w-[495px] left-[57%] top-[18%] flex flex-col items-center"
				variants={SlideUp}
				initial="hidden"
				transition={{ duration: 0.5 }}
				animate="visible"
			>
				<div className="h-[20px] mb-[36px] w-[297px]">
					<WhiteLogo />
				</div>
				<div className="bg-white h-[464px] w-full rounded-lg px-[50px] py-[40px]">
					<h2 className="text-primaryText text-[28px] font-[700] mb-3">
						Sign in
					</h2>
					<p className="text-primaryText text-normal font-light mb-[40px]">
						Welcome to a new experience of...
					</p>
					{error && <p className="text-red-500 mb-2">{error}</p>}
					<form onSubmit={handleSubmit}>
						<div className="mb-[20px]">
							<input
								type="email"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="block w-full p-4 text-base text-gray-900 outline outline-1 outline-[#B3BAC5] placeholder:text-gray-400 focus:outline-indigo-600"
							/>
						</div>
						<div className="relative mb-[20px]">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="current-password"
								required
								className="block w-full p-4 text-base text-gray-900 outline outline-1 outline-[#B3BAC5] placeholder:text-gray-400 focus:outline-indigo-600"
							/>
							<button
								type="button"
								onClick={togglePassword}
								className="absolute right-6 top-4 text-gray-500 hover:text-gray-700"
							>
								{showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
						<div className="flex justify-between mb-[40px]">
							<label className="flex items-center">
								<input
									type="checkbox"
									className="mr-2"
									checked={rememberMe}
									onChange={() => setRememberMe((prev) => !prev)}
								/>
								Remember me
							</label>
							<span className="text-[#006CA6] cursor-pointer">
								Forgot password?
							</span>
						</div>
						<button
							type="submit"
							className="h-[56px] w-full rounded-sm bg-[#006CA6] flex justify-center items-center text-white text-base font-normal cursor-pointer"
							disabled={loading}
						>
							{loading ? "Signing in..." : "Sign in"}
						</button>
					</form>
				</div>
			</motion.div>
		</div>
	);
}

export default SignIn;
