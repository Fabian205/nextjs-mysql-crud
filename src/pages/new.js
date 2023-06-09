import Layout from "@/components/Layout";
import { ProductForm } from "@/components/ProductForm";

function NewPage() {
  return (
    <Layout>
      <div className="grid place-items-center bg-gray-700">
        <ProductForm />
      </div>
    </Layout>
  );
}
export default NewPage;
