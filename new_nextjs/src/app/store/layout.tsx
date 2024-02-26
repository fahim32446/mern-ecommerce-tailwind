import Wrapper from '@/components/Wrapper';

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const { data, loading, error, reFetch } = useFetch(
  //   `${BASE_URL}/product/?page=${page}&search=${search}&price=${sort}`
  // );

  // const productList: ProductListType[] = data;

  // const { data: totalProducts } = useFetch(
  //   `${BASE_URL}/product/totalProducts`
  // ) as any;

  // const totalPages = totalProducts / 6;

  // const handlePrevious = () => {
  //   setPage(Math.max(page - 1, 1));
  // };

  // const handleNext = () => {
  //   setPage(Math.min(page + 1, totalPages));
  // };

  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default StoreLayout;
