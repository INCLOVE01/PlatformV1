import Footer from "@/components/footer";
import MainNavbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <>
        <MainNavbar/>
        {children}
        <Footer/>
        </>
    )
}