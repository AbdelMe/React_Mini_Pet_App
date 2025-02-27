export const metadata = {
    title: {
      default: 'About'
    },
    description: "Hello From About",
  };
  
  export default function About({children}) {
    return (
      <div>
        {children}
      </div>
    );
  }