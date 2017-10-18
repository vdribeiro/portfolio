angular.module('app')

.constant('RESEARCH', {
  description : [
    'In today\'s world, where society highly depends on mobility, the operating conditions of transportation networks sometimes preclude the minimization of human mobility associated costs, and contribute to an unsustainable growth of carbon emissions.',
    'In an effort to reduce both emissions and costs, an innovative solution for fuel consumption estimation was proposed.',
    'The solution involves an Android application that only uses modern smartphones embedded sensors, thus substituting the need of external devices like an OBD, to inform a driver about his driving patterns and fuel efficiency, motivating him to improve his driving behaviour also by offering, in a collaborative fashion, the possibility of comparison with other drivers, and a potential tool in creating new fuel friendly driving patterns and recommend alternative mobility solutions.',
  ],
  highlights : [
    'Contribution to the Future Cities initiative',
    'Fuel consumption estimation and efficiency',
    'Reduce carbon emissions and costs',
    'Mobility and driving patterns',
    'Collaborative',
  ],
  links : [
    {
      title : 'Future Cities',
      url : 'https://futurecities.up.pt/site/'
    },
    {
      title : 'SenseMyCity Framework',
      url : 'http://cloud.futurecities.up.pt/sensemycity/'
    },
    {
      title : 'Mining Geographic Data for Fuel Consumption Estimation',
      url : 'https://www.researchgate.net/publication/271463607_Mining_geographic_data_for_fuel_consumption_estimation',
    },
    {
      title : 'Master Thesis',
      url : '/assets/research/thesis.pdf',
      isDownloadable : 'Thesis'
    },
    {
      title : 'Thesis Summary',
      url : '/assets/research/summary.pdf',
      isDownloadable : 'Summary'
    },
  ],
})
