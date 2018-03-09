/**
 * Default user interface labels
 */

const   labels = {
  en: {
    paratexts: {
      menu: "Parallel Texts"
    }
    , myRecords: {
      p1: "Click the button below to download the records in your personal library. The file will have a .json extension. The records are formatted using json. You can open the file using any text editor."
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
      , itemNote: "Personal Notes"
      , itemOntology: "Ontology"
      , itemText: "Texts"
      , itemTextNote: "Text Notes"
    }
    , about: {
      title: "About the OLW"
      , p1: "The Online Liturgical Workstation (OLW) was developed by and is maintained by staff of the Orthodox Christian Mission Center."
      , p2: "It is Pan-Orthodox, available for all canonical jurisdictions of the Eastern Orthodox Christian Church world-wide."
      , p3: "The purpose of the OLW is provide a secure environment for people to create, manage, and publish translations of the Eastern Orthodox Christian liturgical texts.  It can also be used for other types of material such as daily readings, educational, or catechetical texts.  It is also a tool for researchers."
      , p4: "New user accounts are created by administrators who have verified the identity of the individual and his/her need for access to the system. During beta-testing, no requests for access will be taken."
      , userFeaturesTitle: "OLW Features for Translators"
      , userFeaturesIntro: "The OLW provides translators the ability to..."
      , userFeature01: "create or paste in their own translation while viewing the Greek source text and translations of the text."
      , userFeature02: "view grammatical information about the Greek text."
      , userFeature03: "view notes made by scholars and other translators."
      , userFeature04: "submit a translation for review and/or approval."
      , userFeature05: "produce and download a PDF for a book or service, with one, two, or three translations side-by-side."
      , userFeature06: "produce notes to be seen by readers of the translation."
      , userFeature07: "produce notes for personal use, which can only be viewed by that user unless he or she wants to share them with others."
      , annotatorFeaturesTitle: "OLW Features for Annotators"
      , annotatorFeaturesIntro: "The OLW provides researchers the ability to annotate the liturgical text with..."
      , annotatorFeature01: "grammatical information (grammatical tags and dependency diagrams.);"
      , annotatorFeature02: "references to ontological entities such as God, events, humans, the mysteries, places, etc."
      , annotatorFeature03: "references to Biblical texts."
      , annotatorFeature04: "exegetical information."
      , annotatorFeature05: "advice to translators."
      , securityFeaturesTitle: "Security Features of the OLW"
      , securityFeaturesIntro: "The OLW provides a variety of security features:"
      , securityFeature01: "User accounts are created by administrators who have verified the identity of the user."
      , securityFeature02: "Access to the OLW requires entry of a valid username and password."
      , securityFeature02b: "Only you can view your data, and those to whom you grant access."
      , securityFeature03: "All records in the database are grouped into libraries.  Authorization to access records in a library must be granted to a user by an administrator for that library.  There are types of access (also called 'roles') that can be granted. They are: reader, author, reviewer, and administrator.  A reader may only read a database record.  A reader cannot update a record.  An author can create and update records.  A reviewer can create and update comments about a translation or other text for the purpose of reviewing it.  An administrator can grant other users the role of reader, author, reviewer, or administrator.  The administrator must have administrator rights for that library."
      , securityFeature04: "All records have a status field: Editing, Holding, Ready to Review, Reviewing, Ready to Edit, Ready to Finalize, Finalized, Ready to Release, or Released.  These status control the life-cycle of a record and the workflow for managing a record."
      , securityFeature05: "All records have a visibility field: Personal, Private, or Public.  If the visibility is 'Personal', only the library owner can see or edit it.  If the visibility is 'Private', only those granted access can see or edit it.  If the visibility is 'Public', anyone can see or view it."
      , securityFeature06: "When a record's status is 'Released', it is automatically copied to a separate read-only database. If the visibility is 'Public', anyone can view it in that database."
      , securityFeature07: "When a record is created or updated, the record contains the username and the date and time at which the record was created and/or updated.  It is possible to determine each step of the way, who changed what and when."
      , securityFeature08: "Multiple backups are periodically made from each database.  Access to the backups is secured."
    }
  }
    , el: {
    paratexts: {
      menu: "Parallel Texts"
    }
    , myRecords: {
      p1: "Click the button below to download the records in your personal library. The file will have a .json extension. The records are formatted using json. You can open the file using any text editor."
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
      , itemNote: "Προσωπικές σημειώσεις"
      , itemOntology: "Οντολογία"
      , itemText: "κείμενα"
      , itemTextNote: "Σημειώσεις κειμένου"
    }
    , about: {
      title: "Σχετικά με το OLW"
      , p1: "The Online Liturgical Workstation (OLW) was developed by and is maintained by staff of the Orthodox Christian Mission Center."
      , p2: "It is Pan-Orthodox, available for all canonical jurisdictions of the Eastern Orthodox Christian Church world-wide."
      , p3: "The purpose of the OLW is provide a secure environment for people to create, manage, and publish translations of the Eastern Orthodox Christian liturgical texts.  It can also be used for other types of material such as daily readings, educational, or catechetical texts.  It is also a tool for researchers."
      , p4: "New user accounts are created by administrators who have verified the identity of the individual and his/her need for access to the system. During beta-testing, no requests for access will be taken."
      , userFeaturesTitle: "OLW Features for Translators"
      , userFeaturesIntro: "The OLW provides translators the ability to..."
      , userFeature01: "create or paste in their own translation while viewing the Greek source text and translations of the text."
      , userFeature02: "view grammatical information about the Greek text."
      , userFeature03: "view notes made by scholars and other translators."
      , userFeature04: "submit a translation for review and/or approval."
      , userFeature05: "produce and download a PDF for a book or service, with one, two, or three translations side-by-side."
      , userFeature06: "produce notes to be seen by readers of the translation."
      , userFeature07: "produce notes for personal use, which can only be viewed by that user unless he or she wants to share them with others."
      , annotatorFeaturesTitle: "OLW Features for Annotators"
      , annotatorFeaturesIntro: "The OLW provides researchers the ability to annotate the liturgical text with..."
      , annotatorFeature01: "grammatical information (grammatical tags and dependency diagrams.);"
      , annotatorFeature02: "references to ontological entities such as God, events, humans, the mysteries, places, etc."
      , annotatorFeature03: "references to Biblical texts."
      , annotatorFeature04: "exegetical information."
      , annotatorFeature05: "advice to translators."
      , securityFeaturesTitle: "Security Features of the OLW"
      , securityFeaturesIntro: "The OLW provides a variety of security features:"
      , securityFeature01: "User accounts are created by administrators who have verified the identity of the user."
      , securityFeature02: "Access to the OLW requires entry of a valid username and password."
      , securityFeature02b: "Only you can view your data, and those to whom you grant access."
      , securityFeature03: "All records in the database are grouped into libraries.  Authorization to access records in a library must be granted to a user by an administrator for that library.  There are types of access (also called 'roles') that can be granted. They are: reader, author, reviewer, and administrator.  A reader may only read a database record.  A reader cannot update a record.  An author can create and update records.  A reviewer can create and update comments about a translation or other text for the purpose of reviewing it.  An administrator can grant other users the role of reader, author, reviewer, or administrator.  The administrator must have administrator rights for that library."
      , securityFeature04: "All records have a status field: Editing, Holding, Ready to Review, Reviewing, Ready to Edit, Ready to Finalize, Finalized, Ready to Release, or Released.  These status control the life-cycle of a record and the workflow for managing a record."
      , securityFeature05: "All records have a visibility field: Personal, Private, or Public.  If the visibility is 'Personal', only the library owner can see or edit it.  If the visibility is 'Private', only those granted access can see or edit it.  If the visibility is 'Public', anyone can see or view it."
      , securityFeature06: "When a record's status is 'Released', it is automatically copied to a separate read-only database. If the visibility is 'Public', anyone can view it in that database."
      , securityFeature07: "When a record is created or updated, the record contains the username and the date and time at which the record was created and/or updated.  It is possible to determine each step of the way, who changed what and when."
      , securityFeature08: "Multiple backups are periodically made from each database.  Access to the backups is secured."
    }
  }
}

module.exports = {
  localLabels : labels
  , getAllLabels: (code) => {
    return labels[code];
    }
  , getAboutOlwLabels: (code) => {
    return labels[code].about;
  }
  , getMyRecordsLabels: (code) => {
    return labels[code].myRecords;
  }
}
