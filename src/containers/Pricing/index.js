import React from 'react';
import { withRouteData } from 'react-static';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DocPlans from '@components/DocPlans';
import Hero from '@components/Hero';
import { Section } from '@components/Section';
import Button from '@components/Button';

const PlanFeature = ({ color, name }) => {
  return (
    <div className="flex items-center py-2">
      <FontAwesomeIcon key="1" icon={['fas', 'check-circle']} className={`mr-3 text-lg text-${color}`} />{' '}
      <div>{name}</div>
    </div>
  );
};

const Plan = props => {
  const { title, description, price, unit, features = [], titleColor, button } = props;

  return (
    <div className="flex-1 mx-6 md:my-6 md:flex-auto md:w-full">
      <div className="bg-white p-10 shadow-lg rounded">
        <div className="mb-10 bg-grey-lightest px-8 py-8 -mt-10 -mx-10">
          <div className={`font-bold pb-3 uppercase text-${titleColor || 'grey-darkest'}`}>{title}</div>
          <div className="leading-loose" dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <div className="font-bold mb-4 text-xl flex items-center">
          {price}
          {unit && <span className="font-default text-base ml-3">{unit}</span>}
        </div>

        <div className="mb-10">
          {features.map((feature, key) => (
            <PlanFeature key={key} name={feature} color="green" />
          ))}
        </div>

        {button && (
          <div className="-mx-10 -mb-10">
            <Button {...button} />
          </div>
        )}
      </div>
    </div>
  );
};

export const Pricing = ({ color, hero, plans = [], docPlans }) => {
  const elems = [];

  if (hero) {
    elems.push(<Hero key="hero" bgColor={color} {...hero} skew="7deg" containerClassName="pb-64" />);
  }

  if (plans.length) {
    elems.push(
      <div key="plans" className="container -mt-80 z-5 relative">
        <div className="flex flex-wrap md:mx-0 -mx-6">
          {plans.map((plan, index) => (
            <Plan key={index} titleColor={color} {...plan} />
          ))}
        </div>
      </div>
    );
  }

  if (docPlans) {
    elems.push(
      <Section key="docPlans">
        <DocPlans {...docPlans} />
      </Section>
    );
  }

  return elems;
};

export default withRouteData(Pricing);
