export default {
  name: 'hubspot',
  label: 'HubSpot',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'formId',
      label: 'HubSpot Form ID',
      widget: 'string',
    },
    {
      name: 'portalId',
      label: 'HubSpot ID',
      widget: 'string',
    },
  ],
};
