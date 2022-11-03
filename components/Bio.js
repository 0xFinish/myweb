export function Bio() {
  return (
    <div className="text-white p-4 divide-y-2">
      <p className="text-xl font-bold">Bio</p>
      <div>
        <div className="flex gap-4 mt-2">
          <p className="font-bold">09/2003</p>
          <p>Was bord in Kyiv, Ukraine 2003</p>{" "}
        </div>
        <div className="flex gap-4">
          <p className="font-bold">09/2020-01/2022</p>
          <p>
            Went to the “Igor Sikorsky Kyiv Polytechnic Institute” and learned
            Computer Engineering there for 1.5 years.
          </p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold">03/2022-present</p>
          <p>
            Now learning Business Informatic in the Technical University of
            Brunswick
          </p>
        </div>
      </div>
    </div>
  );
}
