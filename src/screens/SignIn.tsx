import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store"; // Adjust the path as needed
import { login } from "../redux/slices/authSlice";
import { ReactComponent as WhiteLogo } from "../assets/icons/WhiteLogo.svg";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/SlideUp";
import * as Yup from "yup";

function SignIn() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { loading, error } = useSelector((state: RootState) => state.auth);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	const togglePassword = () => {
		setShowPassword((prev) => !prev);
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email format")
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				"Invalid email format"
			)
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.max(20, "Password must not exceed 20 characters")
			.required("Password is required"),
	});
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Handle remember me functionality
		if (rememberMe) {
			localStorage.setItem("rememberedEmail", email);
		} else {
			localStorage.removeItem("rememberedEmail");
		}

		try {
			// Validate form values
			await validationSchema.validate(
				{ email, password },
				{ abortEarly: false }
			);

			// Clear any existing errors
			setErrors({});

			// Dispatch login action
			const resultAction = await dispatch(login({ email, password }));

			if (login.fulfilled.match(resultAction)) {
				navigate("/dashboard");
			}
		} catch (validationErrors) {
			if (validationErrors instanceof Yup.ValidationError) {
				const newErrors: { [key: string]: string } = {};
				validationErrors.inner.forEach((error) => {
					if (error.path) {
						newErrors[error.path] = error.message;
					}
				});
				setErrors(newErrors);
			}
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
			<div className="absolute h-full w-full bg-primary bg-opacity-40"></div>
			<motion.div
				className="absolute h-fit w-[495px] left-[57%] top-[18%] flex flex-col items-center"
				variants={SlideUp}
				initial="hidden"
				transition={{ duration: 0.5 }}
				animate="visible"
			>
				<div className="h-[20px] mb-[36px] w-[297px]">
					<WhiteLogo />
				</div>
				<div className="bg-white h-fit w-full rounded-lg px-[50px] py-[40px]">
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
								type="text"
								placeholder="Email Address"
								autoComplete="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={`block w-full p-4 text-base text-gray-900 outline outline-1 rounded-sm ${
									errors.email ? "outline-red800" : "outline-[#B3BAC5]"
								} placeholder:text-gray-400 focus:outline-indigo-600`}
							/>
							{errors.email && <div className="error">{errors.email}</div>}
						</div>
						<div className="relative mb-[20px]">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="current-password"
								className={`block w-full p-4 text-base text-gray-900 outline outline-1 rounded-sm ${
									errors.password ? "outline-red800 " : "outline-[#B3BAC5]"
								} placeholder:text-gray-400 focus:outline-indigo-600`}
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
							{errors.password && (
								<div className="error">{errors.password}</div>
							)}
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
