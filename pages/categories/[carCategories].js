import { useRouter } from "next/router";

function category() {
   const router = useRouter();
    const {carCategories} = router.query
   
  return (
    <div>{carCategories}</div>
  )
}

export default category