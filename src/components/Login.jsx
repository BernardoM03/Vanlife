import React from "react";
import { useLoaderData, useNavigate, redirect, Form, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedIn", true)
        const response = redirect(pathname)
        Object.defineProperty(response, "body", { value: true })
        return response
    } catch (err) {
        return err.message
    }
}

export default function Login() {
    const errorMsg = useActionData();
    const msg = useLoaderData()
    const navigation = useNavigation();

    return (
        <main className="login">
            <h1>Sign in to your account</h1>
            {msg && <h3 className="red">{msg}</h3>}
            {errorMsg && <h3 className="red">{errorMsg}</h3>}
            <Form method="post" className="login--form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging In" : "Log in"}</button>
            </Form>
        </main>
    );
}