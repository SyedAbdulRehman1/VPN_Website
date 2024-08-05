import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const InvoicePage = () => {
  return (
    <section className="">
      <div>
        <article className="overflow-hidden">
          <div className="rounded-b-md">
            <div className="rounded shadow-sm my-6 ">
              <div className="grid grid-cols-2 items-center relative">
                <div>
                  <ul>
                    <li className="p-2 mb-5 text-self-center">
                      <Link href="/" passHref>
                        <Logo />
                      </Link>
                    </li>
                  </ul>
                </div>
                <a href="" className="flex items-center absolute right-[8px]">
                  <button className="bg-orange-200 dark:text-white py-2 px-4 rounded shadow hover:shadow-xl hover:bg-orange-500 hover:text-white duration-300 flex items-center">
                    <span className="mr-2">Print</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6H4c-1.1 0-2 .9-2 2v8h4v2h12v-2h4V8c0-1.1-.9-2-2-2zm-1 12H5v-1h14v1zm1-4H4V8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v6zm-8 2H8v-1h4v1z" />
                    </svg>
                  </button>
                </a>
              </div>

              {/* Client info */}
              <div className="grid grid-cols-2 items-center mt-8">
                <div>
                  <p className="font-bold text-gray-800">Bill to :</p>
                  <p className="text-gray-500">
                    Laravel LLC.
                    <br />
                    102, San-Fransico, CA, USA
                  </p>
                  <p className="text-gray-500">info@laravel.com</p>
                </div>

                <div className="text-right">
                  <p className="">
                    Invoice number:
                    <span className="text-gray-500">INV-2023786123</span>
                  </p>
                  <p>
                    Invoice date:{" "}
                    <span className="text-gray-500">03/07/2023</span>
                    <br />
                    Due date:<span className="text-gray-500">31/07/2023</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-0 mt-8">
              <table className="min-w-full divide-y divide-slate-500">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                      <div className="font-medium text-slate-700">
                        Tesla Truck
                      </div>
                      <div className="mt-0.5 text-slate-500 sm:hidden">
                        1 unit at $0.00
                      </div>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      48
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      $0.00
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                      <div className="font-medium text-slate-700">
                        Tesla Charging Station
                      </div>
                      <div className="mt-0.5 text-slate-500 sm:hidden">
                        1 unit at $75.00
                      </div>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      4
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      $0.00
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>

                  {/* Here you can write more products/tasks that you want to charge for*/}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      //   colSpan="3"
                      className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                    >
                      Subtotal
                    </th>
                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      //   colSpan="3"
                      className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                    >
                      Discount
                    </th>
                    <th
                      scope="row"
                      className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                    >
                      Discount
                    </th>
                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      //   colSpan="3"
                      className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                    >
                      Tax
                    </th>
                    <th
                      scope="row"
                      className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                    >
                      Tax
                    </th>
                    <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      //   colSpan="3"
                      className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                    >
                      Total
                    </th>
                    <th
                      scope="row"
                      className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                    >
                      Total
                    </th>
                    <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InvoicePage;
