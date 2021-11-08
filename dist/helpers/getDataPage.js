"use strict";

var getDataPage = function getDataPage(images, offset, limit) {
  var size = images.length;
  var previous = '';
  var next = '';
  offset < limit ? prevOffset = 0 : prevOffset = offset;
  parseInt(offset) + parseInt(limit) >= size ? next = null : next = "".concat(process.env.API_URL, "/photos?offset=").concat(parseInt(offset) + parseInt(limit), "&limit=").concat(limit);
  prevOffset == 0 ? previous = null : previous = "".concat(process.env.API_URL, "/photos?offset=").concat(prevOffset, "&limit=").concat(limit);

  if (parseInt(offset) + parseInt(limit) <= size) {
    var page = images.slice(offset, parseInt(offset) + parseInt(limit));
    return {
      next: next,
      previous: previous,
      page: page
    };
  } else {
    var _page = images.slice(offset, size);

    return {
      next: null,
      previous: previous,
      page: _page
    };
  }
};

module.exports = {
  getDataPage: getDataPage
};