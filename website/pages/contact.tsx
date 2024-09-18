import Link from "next/link";

export default function () {
  return (
    <div>
      <div className="flex p-8 items-center justify-between">
        <Link href="/">
          <div className="text-3xl">Gurleen Sethi</div>
        </Link>
      </div>

      <div className="p-8 flex flex-col max-w-screen-sm w-full mx-auto items-center space-y-16">
        <h1 className="text-center text-2xl">Get In Touch</h1>

        <div className="w-full">
          <div>
            <label className="text-secondaryDark mb-1 block">Email</label>
            <input placeholder="john@doe.com" className="input w-full" />

            <label className="text-secondaryDark mb-1 block mt-8">
              Message (optional)
            </label>
            <textarea
              placeholder="john@doe.com"
              className="input w-full resize-none"
            />
          </div>
        </div>

        <div className="w-full flex items-center text-gray-500 space-x-8">
          <div className="h-[1px] w-full bg-gray-200"></div>
          <div>or</div>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>

        <div className="flex space-x-8 justify-center w-full">
          <a
            className="px-4 py-2 rounded-md bg-primaryDark text-primaryLight w-full text-center"
            href="sms:+1 (514) 560-3230"
          >
            Text
          </a>
          <a
            className="px-4 py-2 rounded-md bg-primaryDark text-primaryLight w-full text-center"
            href="tel:+1 (514) 560-3230"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
