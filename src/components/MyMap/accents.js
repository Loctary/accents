const accents = [
  {
    city: 'London, UK',
    location: { lat: 51.507351, lng: -0.127758 },
    youtube: '1WvIwkL8oLc',
  },
  {
    city: 'Truro, UK',
    location: { lat: 50.262951, lng: -5.0507 },
    youtube: 'tcMJWZBzYjU',
  },
  {
    city: 'Taunton, UK',
    location: { lat: 51.014648, lng: -3.10345 },
    youtube: 'WnSrBNxNHVQ',
  },
  {
    city: 'Bristol, UK',
    location: { lat: 51.455311, lng: -2.5919 },
    youtube: 'iXcizut9qA8',
  },
  {
    city: 'Briningham, UK',
    location: { lat: 52.482899, lng: -1.89346 },
    youtube: '1K7xdiUv7So',
  },
  {
    city: 'Norwish, UK',
    location: { lat: 52.628101, lng: 1.29935 },
    youtube: 'G0wrI-vqh54',
  },
  {
    city: 'Liverpool, UK',
    location: { lat: 53.408371, lng: -2.991573 },
    youtube: 'mDtNE_QhO8A',
  },
  {
    city: 'Manchester, UK',
    location: { lat: 53.480759, lng: -2.242631 },
    youtube: 'GsrZk99s9LY',
  },
  {
    city: 'Preston, UK',
    location: { lat: 53.757729, lng: -2.70344 },
    youtube: 'b1jpMQWkSr0',
  },
  {
    city: 'York, UK',
    location: { lat: 53.957741, lng: -1.08226 },
    youtube: '2Qx_2I9QBaA',
  },
  {
    city: 'Newcastle upon Tune, UK',
    location: { lat: 54.97784, lng: -1.61292 },
    youtube: 'w2woc46LXkw',
  },
  {
    city: 'Edinburgh, UK',
    location: { lat: 55.953251, lng: -3.188267 },
    youtube: 'JatocJtUQRM',
  },
  {
    city: 'Glasgow, UK',
    location: { lat: 55.865681, lng: -4.25714 },
    youtube: 'extq6S6WZQU',
  },
  {
    city: 'MAINE, USA',
    location: { lat: 45.067277, lng: -69.166405 },
    youtube: 'AX68AkoFoUc',
  },
  {
    city: 'VERMONT, USA',
    location: { lat: 43.87584, lng: -72.6476 },
    youtube: 'jJKPHiBZIZY',
  },
  {
    city: 'NEW NAMPSHIRE, USA',
    location: { lat: 43.272331, lng: -71.612436 },
    youtube: 'G2tQaunibnU',
  },
  {
    city: 'MASSACHUSETS, USA',
    location: { lat: 42.35899, lng: -71.058632 },
    youtube: 'rLwbzGyC6t4',
  },
  {
    city: 'RHODE ISLAND, USA',
    location: { lat: 41.676117, lng: -71.655978 },
    youtube: 'TZK6VTUBFGM',
  },
  {
    city: 'CONNECTICUT, USA',
    location: { lat: 41.35163, lng: -72.4131 },
    youtube: 'jO7qqVvwI1E',
  },
  {
    city: 'NEW YORK, USA',
    location: { lat: 40.713051, lng: -74.007233 },
    youtube: 'T9yLRJA6zU8',
  },
  {
    city: 'NEW JERSEY, USA',
    location: { lat: 39.87679, lng: -74.58993 },
    youtube: 'sN2zNC0RYBI',
  },
  {
    city: 'PENNSYLVANIA, USA',
    location: { lat: 40.78968, lng: -77.85806 },
    youtube: '_rtA82xDzkk',
  },
  {
    city: 'BALTIMORE, USA',
    location: { lat: 39.29044, lng: -76.61233 },
    youtube: 'w8zavPW3Bus',
  },
  {
    city: 'VIRGINIA, USA',
    location: { lat: 37.65371, lng: -77.85183 },
    youtube: 'YivQL60RqH8',
  },
  {
    city: 'NORTH CAROLINA, USA',
    location: { lat: 35.25821, lng: -81.06845 },
    youtube: 'szvDXwab_gc',
  },
  {
    city: 'SOUTH CAROLINA, USA',
    location: { lat: 32.79974, lng: -79.79529 },
    youtube: 'bOoTV2N1Dng',
  },
  {
    city: 'GEORGIA, USA',
    location: { lat: 32.85531, lng: -83.6388 },
    youtube: 'vk-7CMpT38E',
  },
  {
    city: 'FLORIDA, USA',
    location: { lat: 28.34745, lng: -81.41952 },
    youtube: 'spHogjIcx4g',
  },
  {
    city: 'WEST VIRGINIA, USA',
    location: { lat: 38.56159, lng: -80.909334 },
    youtube: 'oqhFbo3Iye4',
  },
  {
    city: 'OHIO, USA',
    location: { lat: 39.85593, lng: -83.028 },
    youtube: 'JKhUmJwp0LA',
  },
  {
    city: 'MICHIGAN, USA',
    location: { lat: 42.73262, lng: -84.47867 },
    youtube: 'Nn9yJPrPqmk',
  },
  {
    city: 'INDIANA, USA',
    location: { lat: 39.82686, lng: -86.13702 },
    youtube: 'tGvlemweeec',
  },
  {
    city: 'KENTUCKY, USA',
    location: { lat: 37.66128, lng: -84.56798 },
    youtube: '3lBHUHpZM3E',
  },
  {
    city: 'TENNESSEE, USA',
    location: { lat: 36.12851, lng: -86.83549 },
    youtube: 'nvdiumpNMCs',
  },
  {
    city: 'ALABAMA, USA',
    location: { lat: 32.37654, lng: -86.29966 },
    youtube: 'huLKa3Sysdw',
  },
  {
    city: 'LOUISIANA, USA',
    location: { lat: 29.94262, lng: -90.02769 },
    youtube: 'tpFDNTo4DNg',
  },
  {
    city: 'MISSISSIPPI, USA',
    location: { lat: 33.4578, lng: -88.7939 },
    youtube: 'Bt04Y5jqUyQ',
  },
  {
    city: 'ARKANSAS, USA',
    location: { lat: 36.06426, lng: -91.59162 },
    youtube: 'S2HQyeJYKwM',
  },
  {
    city: 'MISSOURI, USA',
    location: { lat: 39.7127, lng: -92.95264 },
    youtube: '8f06sEOw-C4',
  },
  {
    city: 'IOWA, USA',
    location: { lat: 41.589545, lng: -93.598805 },
    youtube: 'B4wMrS8gL1M',
  },
  {
    city: 'MINNEAPOLIS, USA',
    location: { lat: 45.037893, lng: -93.234152 },
    youtube: 'iVlNl_LX47I',
  },
  {
    city: 'WISCONSIN, USA',
    location: { lat: 44.724147, lng: -89.672609 },
    youtube: 'U61JcjNrKGo',
  },
  {
    city: 'ILLINOIS, USA',
    location: { lat: 41.863277, lng: -87.652647 },
    youtube: 'HnhMJN5ItX4',
  },
  {
    city: 'NORTH DAKOTA, USA',
    location: { lat: 47.402067, lng: -100.173443 },
    youtube: 'zy1z3o86FbI',
  },
  {
    city: 'SOUTH DAKOTA, USA',
    location: { lat: 44.533753, lng: -100.17788 },
    youtube: 'DuBenCPOq3c',
  },
  {
    city: 'NEBRASKA, USA',
    location: { lat: 41.527822, lng: -99.57711 },
    youtube: 'sl0IqHI1HWI',
  },
  {
    city: 'KANSAS, USA',
    location: { lat: 38.430989, lng: -98.516426 },
    youtube: '-C6MPNOatWw',
  },
  {
    city: 'OKLAHOMA, USA',
    location: { lat: 35.477131, lng: -97.527073 },
    youtube: 'LqIh7owx4DI',
  },
  {
    city: 'TEXAS, USA',
    location: { lat: 30.53753, lng: -97.597238 },
    youtube: 's3AuqeI51mY',
  },
  {
    city: 'NEW MEXICO, USA',
    location: { lat: 34.91188, lng: -106.541739 },
    youtube: '6uhSKDpKt8o',
  },
  {
    city: 'COLORADO, USA',
    location: { lat: 39.976007, lng: -104.978478 },
    youtube: 'VZGV3tBHqkg',
  },
  {
    city: 'WYOMING, USA',
    location: { lat: 42.973611, lng: -107.429006 },
    youtube: 'Lugx3VdxCNU',
  },
  {
    city: 'MONTANA, USA',
    location: { lat: 46.885061, lng: -109.837407 },
    youtube: '_6sAFaxSovk',
  },
  {
    city: 'OREGON, USA',
    location: { lat: 43.753553, lng: -120.430532 },
    youtube: '7UwE1E2Eebk',
  },
  {
    city: 'NEVADA, USA',
    location: { lat: 39.782115, lng: -116.880373 },
    youtube: '51juwzM4plI',
  },
  {
    city: 'UTAH, USA',
    location: { lat: 39.07737, lng: -111.641275 },
    youtube: 'HuJOHOwxZYI',
  },
  {
    city: 'ARIZONA, USA',
    location: { lat: 33.736363, lng: -112.037377 },
    youtube: 'jusOFxVfjjI',
  },
  {
    city: 'CALIFORNIA, USA',
    location: { lat: 36.516372, lng: -119.582013 },
    youtube: '80xMoaAiHfI',
  },
];

export default accents;
