import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <span className="self-center text-2xl font-semibold whitespace-nowrap leading-none">
              ngubalan
              <br />
              daring
            </span>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center place-items-center">
              <div className="md:hidden pb-[18px]">
                <svg
                  width="161"
                  height="23"
                  viewBox="0 0 171 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.32 15.92L19.52 12.48L19.48 12.44H19.52L23.16 8.04C25.32 5.36 27.84 2.96 30.64 0.919999H25.08C24.8 2.64 24.08 4.2 23 5.56L18.4 11.04L13.88 5.56C12.8 4.24 12.08 2.64 11.8 0.919999H0.4C3.48 3.32 6.28 6.04 8.76 9.04L11.56 12.48H11.6L11.56 12.52L7.92 16.92C5.76 19.6 3.24 22 0.44 24.04H6.12C6.4 22.32 7.12 20.76 8.2 19.4L12.76 13.92L17.24 19.4C18.32 20.72 19.04 22.32 19.32 24.04H30.72C27.64 21.64 24.84 18.92 22.36 15.92H22.32ZM52.8547 0.919999C53.1747 2.6 52.9747 4.36 52.2547 5.92L47.0547 17.48L42.1347 6.44C41.5347 5.12 41.2547 3.72 41.2547 2.32C41.2547 1.84 41.2947 1.36 41.3747 0.88H31.1747C33.2547 3.08 34.9747 5.6 36.2147 8.36L41.9347 21.16C42.7347 22.92 43.3347 25.52 42.5347 27.28C42.5347 27.28 40.9347 30.96 38.4947 30.96C37.0147 30.96 37.2147 26.84 38.8947 25.2H35.2947C33.8547 25.2 32.6547 26.4 32.6947 27.84C32.7347 29.2 33.2947 30.4 34.1747 31.28C35.0547 32.16 36.8547 32.72 38.2147 32.76C40.9347 32.76 42.8947 31.16 44.0147 28.68L53.2947 7.96C54.4947 5.32 56.1347 2.92 58.1747 0.88L52.8547 0.919999ZM78.0013 22.24H64.1612L82.1213 6.36V0.919999H59.7613V5.64C59.7613 5.76 59.8013 5.76 59.8813 5.72C61.4413 4.52 63.1613 2.72 65.1213 2.72H77.8413L59.8013 18.6V24.04H82.2013V19.32C81.2413 20.64 79.6813 22.24 78.0413 22.24H78.0013ZM109.912 17.8L109.872 7.12C109.872 3.56 110.952 1.68 111.392 1.08L111.552 0.88H101.952L102.032 0.959999C102.152 1.12 102.392 1.44 102.672 1.96L102.712 2.04C103.152 3.04 103.632 4.64 103.632 7.04L103.672 13.76C103.672 19.68 102.192 22.68 97.3119 22.68C93.4719 22.68 92.0319 19.68 92.0319 13.76V7.08C92.0319 3.52 93.1119 1.64 93.5519 1.04L93.7119 0.839998H84.6719L84.7519 0.919999C84.8719 1.08 85.1119 1.4 85.3919 1.92L85.4319 2C85.8719 3 86.3519 4.6 86.3519 7V12.36C86.3519 19 89.1919 24.4 97.3119 24.4C98.6319 24.4 100.352 24.16 101.312 23.76C104.592 22.36 108.312 22.44 111.552 23.88C111.472 23.76 111.112 23.28 110.752 22.36C110.352 21.32 109.952 19.76 109.952 17.72L109.912 17.8ZM139.609 7.12C139.609 3 141.289 0.919999 141.289 0.919999C138.009 2.4 134.289 2.48 131.009 1.08C130.009 0.68 128.289 0.439998 126.969 0.439998C118.849 0.439998 114.329 5.84 114.329 12.48C114.329 19.12 118.849 24.52 126.969 24.52C130.289 24.52 131.929 22.96 133.369 20.96C133.369 22.64 135.289 24 136.969 24H141.249C141.249 24 139.569 22 139.569 18.4L139.609 7.12ZM126.929 22.72C123.089 22.72 120.529 18.4 120.529 12.44C120.529 6.52 123.089 2.16 126.929 2.16C131.809 2.16 133.329 6.52 133.329 12.44C133.329 16.28 131.809 22.68 126.929 22.68V22.72ZM162.095 23.84L161.935 24.04H170.975L170.895 23.96C170.775 23.8 170.535 23.48 170.255 22.96L170.215 22.88C169.775 21.88 169.295 20.28 169.295 17.88V12.52C169.295 5.88 166.455 0.48 158.335 0.48C157.015 0.48 155.295 0.719999 154.335 1.12C151.055 2.52 147.335 2.44 144.095 0.999998C144.175 1.12 144.535 1.6 144.895 2.52C145.295 3.56 145.695 5.12 145.695 7.16L145.735 17.84C145.735 21.4 144.655 23.28 144.215 23.88L144.055 24.08H153.655L153.575 24C153.455 23.84 153.215 23.52 152.935 23L152.895 22.92C152.455 21.92 151.975 20.32 151.975 17.92L151.935 11.2C151.935 5.28 153.415 2.28 158.295 2.28C162.135 2.28 163.575 5.28 163.575 11.2V17.88C163.575 21.44 162.495 23.32 162.055 23.92L162.095 23.84Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Selamat datang,
              </h1>
              <p className="text-sm text-muted-foreground">
                Silahkan login menggunakan email dan password anda
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <Link
                to="/auth/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
