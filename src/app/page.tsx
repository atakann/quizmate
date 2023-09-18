import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
	const session = await getAuthSession();
	if (session?.user) {
		// user logged in
		return redirect("/dashboard");
	}
	return (
		<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
			<Card className="w-[300px]">
				<CardHeader>
					Welcome to QuizMate
					<CardDescription>
						<p>
							QuizMate is a web app that allows you to quiz
							yourself on any subject you want! You can create
							your own quizzes or use quizzes created by other
							users.
						</p>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInButton text="Sign In with Google" />
				</CardContent>
			</Card>
		</div>
	);
}
