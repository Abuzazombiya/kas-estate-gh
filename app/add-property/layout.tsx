import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdminEmail } from "@/lib/admin";


export default async function AddPropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user?.id) {
    redirect("/sign-in");
  }

  const userEmail = user.primaryEmailAddress?.emailAddress;
  const adminCheck = isAdminEmail(userEmail, process.env.NEXT_PUBLIC_ADMIN_EMAILS);

  if (!adminCheck) {
    redirect("/not-authorized");
  }

  return <>{children}</>;
}
