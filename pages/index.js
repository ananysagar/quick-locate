import CategoryList from "@/components/CategoryList";
import SearchBar from "@/components/SearchBar";
import SideNavbar from "@/components/SideNavbar";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
        <div>
          <SearchBar />
          <CategoryList />
        </div>
        <div>Google Map</div>
      </div>
    </div>
  );
}
