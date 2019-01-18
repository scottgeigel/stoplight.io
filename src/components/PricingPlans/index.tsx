import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, IButton } from 'src/components/Button';
import { Container } from 'src/components/Container';

export interface IPlanFeature {
  color: string;
  name: string;
}

export interface IPricingPlan {
  title: string;
  description: string;
  price: string;
  unit: string;
  features: Array<IPlanFeature['name']>;
  titleColor: string;
  button: IButton;
}

export interface IPricingPlans {
  color: string;
  plans: IPricingPlan[];
}

export const PlanFeature: React.FunctionComponent<IPlanFeature> = ({ color, name }) => {
  return (
    <div className="flex items-center py-2">
      <FontAwesomeIcon key="1" icon={['fas', 'check-circle']} className={`mr-3 text-lg text-${color}`} />{' '}
      <div>{name}</div>
    </div>
  );
};

export const PricingPlan: React.FunctionComponent<IPricingPlan> = ({
  title,
  description,
  price,
  unit,
  features = [],
  titleColor,
  button,
}) => {
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

export const PricingPlans: React.FunctionComponent<IPricingPlans> = ({ color, plans }) => {
  if (!plans || !plans.length) {
    return null;
  }

  return (
    <Container className="-mt-80 z-5 relative">
      <div className="flex flex-wrap md:mx-0 -mx-6">
        {plans.map((pricingPlan, key) => (
          <PricingPlan key={key} titleColor={color} {...pricingPlan} />
        ))}
      </div>
    </Container>
  );
};
