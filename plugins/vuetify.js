import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
	theme: {
		primary: colors.purple.base,
		secondary: colors.purple.darken2,
		accent: colors.blueGrey.base,
		warning: colors.yellow.base,
		error: colors.red.accent4,
		success: colors.green.base
	}
});
