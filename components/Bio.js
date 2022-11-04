export function Bio() {
  return (
    <div className="text-white py-4 divide-y-2 w-9/12 mx-auto bg-green-900/70 mt-16 rounded-xl px-8">
      <p className="text-xl font-bold">Bio</p>
      <div>
        <div className="flex gap-4 mt-2">
          <p className="font-bold">09/2003</p>
          <p>Was born in Kyiv, Ukraine</p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold">09/2020-01/2022</p>
          <p>
            Studied
            Computer Engineering in “Igor Sikorsky Kyiv Polytechnic Institute” for 1.5 years.
          </p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold">03/2022-present</p>
          <p>
            Now learning Business Informatics in the Technical University of
            Brunswick.
          </p>
        </div>
      </div>
    </div>
  );
}
