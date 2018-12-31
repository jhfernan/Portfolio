import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
	theme: {
		primary: colors.blueGrey.base,
		secondary: colors.blueGrey.darken2,
		accent: colors.orange.base,
		warning: colors.yellow.base,
		error: colors.red.accent4,
		success: colors.green.base
	}
});
