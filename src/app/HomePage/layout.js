// app/HomePage/page.js (Server Component)
export const metadata = {
    title: {
      default: 'HomePage'
    },
    description: "Hello From HomePage",
  };
  
  export default function HomePage({children}) {
    return (
      <div>
        {children}
      </div>
    );
  }