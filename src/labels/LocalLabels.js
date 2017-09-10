/**
 * Default user interface labels
 */

const   labels = {
  en: {
    paratexts: {
      menu: "Parallel Texts"
    }
    , texts: {
      menu: "Texts"
      , itemNew: "New Text Part"
      , itemSearch: "Search Text Parts"
    }
    , notes: {
      menu: "Notes"
      , itemNew: "New Note"
      , itemSearch: "Search Notes"
    }
    , links: {
      menu: "Links"
      , itemNew: "New Text Link"
      , itemSearch: "Search Text Links"
    }
    , add: {
      menu: "Add"
      , itemEntity: "Entity"
      , itemLink: "Link"
      , itemNote: "Note"
      , itemText: "Text"
      , itemTopic: "Topic"
    }
    , edit: {
      menu: "Edit"
    , itemAges: "Using AGES"
    , itemOslw: "Using OSLW"
    , itemTopic: "Using Topic"
    }
    , generate: {
      menu: "Generate"
      , itemAges: "Using AGES"
      , itemOslw: "Using OSLW"
    }
    , search: {
      menu: "Search"
      , itemLink: "Links"
      , itemNote: "Notes"
      , itemOntology: "Ontology"
      , itemText: "Texts"
    }
  }
  , el: {
    paratexts: {
      menu: "Parallel Texts"
    }
    , texts: {
      menu: "Text Parts"
      , itemNew: "New Text Part"
      , itemSearch: "Search Text Parts"
    }
    , notes: {
      menu: "Notes"
      , itemNew: "New Note"
      , itemSearch: "Search Notes"
    }
    , links: {
      menu: "Text Links"
      , itemNew: "New Text Link"
      , itemSearch: "Search Text Links"
    }
  }
}

module.exports = {
  localLabels : labels
  , getAllLabels: (code) => {
    return labels[code];
    }
}
