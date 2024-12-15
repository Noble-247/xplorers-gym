import { Metadata } from "next/types";
import React, { Fragment } from "react";
import Header from "../components/Header";
import { plans } from "../data";
import Card from "../components/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xplorers Gym | Plans",
};

export default function Plans() {
  return (
    <Fragment>
      <Header title='Membership Plans' image={"/img/header_bg_4.jpg"}>
        Find the membership plan that fits your busy schedule. Whether you’re
        looking for flexible day access, monthly plans, or family packages,
        we’ve got options for every budget. No matter your choice, you’re one
        step closer to a healthier you.
      </Header>
      <section className='mt-[10rem]'>
        <div className='website_container grid grid-cols-[1fr] gap-[1rem] md:grid-cols-[1fr_1fr] md:gap-[2rem] lg:grid-cols-[repeat(3,_1fr)] lg:gap-[3rem]'>
          {plans.map((plan) => (
            <Card key={plan.id} className='w-[90%] md:w-[100%] mx-auto'>
              <h3 className='text-sm-heading-3 lg:text-lg-heading-3 xl:text-xl-heading-3 mb-[0.8rem]'>
                {plan.name}
              </h3>
              <small className='block'>{plan.description1}</small>
              <small className='mb-[2rem] block'>{plan.description2}</small>
              <h1 className='text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1 text-primary inline'>{`${plan.price}`}</h1>
              {/* <h2 className='ext-sm-heading-2 lg:text-lg-heading-2 xl:text-xl-heading-2 inline text-gray-400'>
                /mo
              </h2> */}
              <h4 className='ext-sm-heading-4 lg:text-lg-heading-4 xl:text-xl-heading-4 mt-[2rem]'>
                Features
              </h4>
              {plan.features.map((feature) => (
                <p
                  key={feature.id}
                  className={`${
                    !feature.available ? "text-gray-400" : ""
                  } mt-[1rem] text-gray-100`}
                >
                  {feature.feature}
                </p>
              ))}
              <Link
                href='/subscribe'
                className='btn lg mt-[3rem] cursor-pointer block'
              >
                Choose Plan
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
