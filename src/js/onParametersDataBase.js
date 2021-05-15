function onParametersDataBase(data) {
  return data.map(i => {
    return {
      ['id']: i.id ? i.id : 'id',
      ['info']: i.info ? [i.info.substr(0, 60), i.info.substr(60)] : 0,
      ['name']: i.name ? i.name : 'name',
      ['dates']: i.dates.start.localDate
        ? i.dates.start.localDate
        : 'Date will be announced later',
      ['images']: i.images
        ? i.images.find(el => el.ratio === '4_3').url
        : i.images[3].url,
      ['images2x180']: i.images
        ? i.images.find(el => el.width === 2048).url
        : i.images.find(el => el.ratio === '4_3'),
      ['images1x180']: i.images
        ? i.images.find(el => el.width === 1136).url
        : i.images.find(el => el.ratio === '4_3'),
      ['images2x128']: i.images
        ? i.images.find(el => (el.ratio === '16_9') & (el.width === 1024)).url
        : i.images.find(el => el.ratio === '4_3'),
      ['images1x128']: i.images
        ? i.images.find(el => (el.ratio === '3_2') & (el.width === 1024)).url
        : i.images.find(el => el.ratio === '4_3'),
      ['time']: i.dates.start.localTime ? i.dates.start.localTime : 'time',
      ['timezone']: i.dates.timezone ? i.dates.timezone : 'timezone',
      ['priceRanges']: i.priceRanges ? i.priceRanges : 0,
      // ['priceRangesType0']: i.priceRanges
      //   ? i.priceRanges[0].type
      //   : 'priceRangesType0',
      // ['priceRangesMin']: i.priceRanges
      //   ? i.priceRanges[0].min
      //   : 'priceRangesMin',
      // ['priceRangesMax']: i.priceRanges
      //   ? i.priceRanges[0].max
      //   : 'priceRangesMax',
      ['products']: i.products ? i.products : 0,
      ['venuesName']:
        i._embedded !== undefined && 'venues' in i._embedded
          ? i._embedded.venues[0].name
          : 0,
      // ['venuesName']: i._embedded?.venues[0]?.name,
      ['locationLatitude']:
        i._embedded !== undefined &&
        'venues' in i._embedded &&
        i._embedded.venues[0].location !== undefined
          ? i._embedded.venues[0].location.latitude
          : 0,
      ['locationLongitude']:
        i._embedded !== undefined &&
        'venues' in i._embedded &&
        i._embedded.venues[0].location !== undefined
          ? i._embedded.venues[0].location.longitude
          : 0,
      ['city']:
        i._embedded !== undefined && 'venues' in i._embedded
          ? i._embedded.venues[0].city.name
          : 0,
      // ['city']: i._embedded?.venues[0]?.city.name,
      ['country']:
        i._embedded !== undefined && 'venues' in i._embedded
          ? i._embedded.venues[0].country.name
          : 'country',
      ['priceRangesCurrency']:
        i.priceRanges !== undefined ? i.priceRanges[0].currency : 0,
      // ['productsUrl0']:
      //   i.products !== undefined ? i.products[0].url : 'productsUrl0',
      // ['productsUrl1']:
      //   i.products !== undefined && i.products.length > 1
      //     ? i.products[1].url
      //     : 'productsUrl',
      // ['priceRangesType1']:
      //   i.priceRanges !== undefined && i.priceRanges.length > 1
      //     ? i.priceRanges[1].type
      //     : 'priceRangesType1',
      // ['priceRangesType1Min']:
      //   i.priceRanges !== undefined && i.priceRanges.length > 1
      //     ? i.priceRanges[1].min
      //     : 'priceRangesType1Min',
      // ['priceRangesType1Max']:
      //   i.priceRanges !== undefined && i.priceRanges.length > 1
      //     ? i.priceRanges[1].max
      //     : 'priceRangesType1Max',
      // ['priceRangesType1Currency']:
      //   i.priceRanges !== undefined && i.priceRanges.length > 1
      //     ? i.priceRanges[1].currency
      //     : 'priceRangesType1Currency',
    };
  });
}

/**Sort imgs and break into pieces info on data */
function dataForEach(array) {
  array._embedded.events.forEach(i => {
    i.images.sort((a, b) => a.width - b.width);
    if (i.info) {
      i.info = [i.info.substr(0, 60), i.info.substr(60)];
    }
  });
}
export { dataForEach, onParametersDataBase };
