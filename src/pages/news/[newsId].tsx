import { useRouter } from "next/router";

export default function DynamicPage() {
    const router = useRouter()
    const newsId = router.query.newsId;
    return <h1> THE DYNAMIC PAGE</h1>
}

