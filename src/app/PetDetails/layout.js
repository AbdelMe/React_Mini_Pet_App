export const metadata = {
    title: {
      default: 'PetDetails'
    },
    description: "Hello From PetDetails",
  };
  
  export default function PetDetails({children}) {
    return (
      <div>
        {children}
      </div>
    );
  }