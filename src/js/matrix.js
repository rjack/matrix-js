/*jslint white: true, browser: true, devel: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, newcap: true, immed: true */

this.Matrix = (function ()
{
	var sum = function (u, v)
		{
			var i, result = [];

			if (v.length !== u.length) {
				throw "Lengths don't match";
			}

			for (i = 0; i < u.length; i++) {
				result[i] = u[i] + v[i];
			}

			return result;
		},



		scalar_product = function (u, v)
		{
			var i, result = 0;

			if (v.length !== u.length) {
				throw "Lengths don't match";
			}

			for (i = 0; i < u.length; i++) {
				result += u[i] * v[i];
			}

			return result;
		};


	return {
		sum: sum,
		scalar_product: scalar_product
	};
}());
