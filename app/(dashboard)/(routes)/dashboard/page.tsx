import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <p className="text-6xl text-green-500 pb-5">Hello SaaS AI Dashboard Page(Protected)</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default DashboardPage;