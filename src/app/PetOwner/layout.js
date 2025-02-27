export const metadata = {
    title: {
      default: 'PetOwner'
    },
    description: "Hello From PetOwner",
  };
  
  export default function PetOwner({children}) {
    return (
      <div>
        {children}
      </div>
    );
  }