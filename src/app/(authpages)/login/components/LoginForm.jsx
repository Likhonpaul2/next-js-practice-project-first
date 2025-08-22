"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast";

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false });

            if (response.ok) {
                router.push("/");
                form.reset();
                toast.success("Logged In Successfully.")
            } else {
                toast.error("Failed to Log In")
            }
        } catch (error) {
            console.log(error)
            alert("Authentication failed");
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
