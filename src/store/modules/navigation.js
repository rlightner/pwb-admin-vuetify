// import axios from 'axios'

// initial state
const state = {
  mainNavItems: [
    // {
    //     icon: "fa fa-home",
    //     tabTitleKey: "adminSections.start",
    //     tabRoute: "admin.setup"
    //     // tabRoute: "admin.inicio"
    //   }, {
    //     tabTitleKey: "adminSections.properties",
    //     tabRoute: "admin.propiedades",
    //     icon: 'domain',
    //     text: 'Properties',
    //     href: 'properties',
    //     router: true,
    //   },
    {
      icon: 'domain',
      title: 'Properties',
      tabTitleKey: "adminSections.properties",
      isGroupHeader: true,
      childItems: [{
        icon: 'domain',
        text: 'List',
        href: 'propertiesList',
        router: true
      }, {
        icon: 'domain',
        text: 'Labels',
        href: 'defaultPropertyLabel',
        router: true
      }, {
        icon: 'domain',
        text: 'New Property',
        href: 'newProperty',
        router: true
      }]
    },
    // {
    //   icon: "fa fa-desktop",
    //   tabTitleKey: "adminSections.content",
    //   tabRoute: "admin.website",
    //   subMenuItems: [{
    //     icon: "fa fa-gear",
    //     tabTitleKey: "adminSections.websiteSettings",
    //     tabRoute: "admin.website.settings"
    //   }, {
    //     icon: "fa fa-keyboard-o",
    //     tabTitleKey: "webContentSections.footer",
    //     tabRoute: "admin.website.details.footer"
    //   }]
    {
      icon: "pages",
      tabTitleKey: "adminSections.pages",
      // tabRoute: "admin.pages",
      // subMenuItems: [],
      // title: 'Attractions',
      isGroupHeader: true,
      childItems: []

    },
    //   icon: "fa fa-exchange",
    //   tabTitleKey: "adminSections.import",
    //   tabRoute: "admin.io"
    // }, {
    //   icon: "fa fa-user",
    //   tabTitleKey: "adminSections.agencyDetails",
    //   tabRoute: "admin.agency"
    // }, {
    //   icon: "contacts",
    //   tabTitleKey: "adminSections.about",
    //   href: 'about',
    //   router: true
    // }, {
    //   icon: 'money',
    //   text: 'Currencies',
    //   href: 'currencies',
    //   router: true
    // }, {
    //   icon: 'pages',
    //   tabTitleKey: 'Admin Pages',
    //   href: 'admin-pages-list',
    //   router: true
    // }, {
    //   icon: 'contacts',
    //   tabTitleKey: 'Contacts',
    //   href: 'contacts',
    //   router: true
    // }, {
    //   icon: 'contacts',
    //   tabTitleKey: 'Create contact',
    //   href: 'CreateContact',
    //   router: true
    // }
  ],
  propertyTabs: [{
    tabValue: "general",
    tabTitleKey: "propertySections.general",
    componentName: "PropertyGeneralDetails",
  }, {
    tabValue: "text",
    tabTitleKey: "propertySections.text",
    componentName: "PropertyTextDetails",
  }, {
    tabValue: "sale-rental",
    tabTitleKey: "propertySections.sale",
    componentName: "PropertySaleDetails",
  }, {
    tabValue: "location",
    tabTitleKey: "propertySections.location",
    componentName: "PropertyLocationDetails",
  }, {
    tabValue: "features",
    tabTitleKey: "propertySections.extras",
    componentName: "PropertyFeaturesDetails",
  }, {
    tabValue: "photos",
    tabTitleKey: "propertySections.photos",
    componentName: "PropertyPhotosDetails",
  }],
  propertyLabelTabs: [{
      tabValue: "features",
      tabTitleKey: "translationsSections.extras",
      componentName: "PropertyFeatures"
    }, {
      tabValue: "property-types",
      tabTitleKey: "translationsSections.propertyTypes",
      componentName: "PropertyTypes"
      // }, {
      //   tabValue: "property-origins",
      //   tabTitleKey: "translationsSections.propertyOrigins"
    }, {
      tabValue: "property-states",
      tabTitleKey: "translationsSections.propertyStates",
      componentName: "PropertyStates"
      // }, {
      //   tabValue: "transaction-status",
      //   tabTitleKey: "translationsSections.propertyLabels",
      //   componentName: "TransactionStatus"
    }
    // ,{
    //   tabValue: "provinces",
    //   tabTitleKey: "translationsSections.provinces"
    // }
  ],
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
