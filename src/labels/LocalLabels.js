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
    , administer: {
      menu: "Administer"
    }
    , edit: {
      menu: "Edit"
      , itemAges: "Using AGES DCS"
      , itemOslw: "Using OSLW"
      , itemTopic: "Using Topic"
    }
    , generate: {
      menu: "Generate"
      , itemAges: "Using AGES DCS"
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
      menu: "Προσθήκη"
      , itemEntity: "Entity"
      , itemLink: "Link"
      , itemNote: "Note"
      , itemText: "Text"
      , itemTopic: "Topic"
    }
    , administer: {
      menu: "Διαχειριστής"
    }
    , edit: {
      menu: "Επεξεργασία"
    , itemAges: "Χρήση το AGES"
    , itemOslw: "Χρήση το OSLW"
    , itemTopic: "Χρήση το Topic"
    }
    , generate: {
      menu: "Δημιουργία"
      , itemAges: "Χρήση το AGES"
      , itemOslw: "Χρήση το OSLW"
    }
    , search: {
      menu: "Αναζήτηση"
      , itemLink: "Σύνδεσμοι"
      , itemNote: "Σημειώσεις"
      , itemOntology: "Οντολογία"
      , itemText: "κείμενα"
    }
  }
}

module.exports = {
  localLabels : labels
  , getAllLabels: (code) => {
    return labels[code];
    }
}
