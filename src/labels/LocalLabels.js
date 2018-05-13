/**
 * Default user interface labels
 */

const   labels = {
  en: {
    home: {
      p1: "Welcome to translators of the liturgical texts, and to scholars who are creating resources to help us understand the meaning of the texts!"
      , p2: "Through the prayers of the Holy Hymnographers Saints Komas the Melodist, John of Damascus, and Nikodemos the Athenite, may our work be done in God, by Him, and through Him, to His glory and honor!"
      , msg1: "From time to time, we need to update the web app or the database. If you suddenly see messages about network errors or something not being available, wait a few minutes and try again."
    }
    , paratexts: {
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
      , itemSchEditor: "Using Schema Editor"
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
      , userFeature01: "create or paste their own translation while viewing the Greek source text and translations of the text."
      , userFeature02: "view grammatical information about the Greek text."
      , userFeature03: "view notes made by scholars and other translators."
      , userFeature04: "submit a translation for review and/or approval."
      , userFeature05: "produce and download a PDF for a book or service, with one, two, or three translations side-by-side."
      , userFeature06: "produce notes to be seen by readers of the translation."
      , userFeature07: "produce notes for personal use, which can only be viewed by that user unless he or she wants to share them with others."
      , aboutVideo01: "This video explains how using OLW saves time and reduces errors when entering translations and creating services and books."
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
    , help: {
      title: "Help Page"
      , intro: "Below you can find instructions on how to do various things.  There are also videos. Even if you do not usually watch videos to learn how to use software, please do watch the video on the Grammar Explorer.  Also, it is important to read the section titled 'How to Search the Liturgical Database'. You will better understand how the database works."
      , videos: "How To..."
      , videoWarning: "It can take a few seconds or longer for a video to load.  How long it takes depends on your Internet speed.  If a video does not start playing right away, please wait. If you see a spinning wheel on a video, go ahead and click the play button anyway."
      , videoLogon: "How to login and logout"
      , videoMenuOverview: "An overview of the menu items"
      , videoChangeLanguage: "How to change the language of the user interface"
      , videoDailyReadings: "How to edit and generate daily readings"
      , videoSelectService: "How to select a Service or Liturgical Book from AGES DCS"
      , videoGenerateService: "How to generate a service or liturgical book"
      , videoEnterTranslation: "How to enter a Translation"
      , videoCreateNote: "How to create a note"
      , videoSearchNotes: "How to search for notes"
      , videoSearchTexts: "How to search texts"
      , videoCreateTag: "How to create or edit tags for a note"
      , videoTagSearch: "How to use tags to search for notes"
      , videoNoteDownload: "How to download your personal notes"
      , videoGrammar: "How to use the Grammar Explorer"
      , videoLogonText: "Click the 'person' on the right of the menu bar.  Then click 'Login'. Go to the same menu to select 'Logout'."
      , videoMenuOverviewText: "The menu bar provides access to the various tools that are available.  After you login you will see more options."
      , videoChangeLanguageText: "To change the language of the user interface, click a flag that represents the language you want. Contact us if you want to help us add your language to the user interface."
      , videoDailyReadingsText: "Regarding Daily Readings, note that there are place holders for the Feast or Saint commemorated [saint/com] and for narrative descriptions of the feast or the life of the saint [paragraph]. You can fill these in for your specific language.  If you do not enter a commemoration or paragraph, it will be removed when the daily readings are generated."
      , videoSelectServiceText: "Both the Editor and Generator allow you to select an AGES service or book template. These templates are reusable for any language that is in the database."
      , videoGenerateServiceText: "You can generate services or books for one, two, or three languages side-by-side. If some part has not been translated yet for the language you select, you will see English or Greek instead.  These are called 'fallback' languages."
      , videoEnterTranslationText: "You can enter the translation of texts of libraries for which you have authorization. Select Editor > Using AGES DCS, then select the template you want to use and the library for which you are translating."
      , videoCreateNoteText: "If you are authorized, when you are in the Editor for a text, you can create notes about the text."
      , videoSearchNotesText: "You can search the content of notes.  On the menu bar, click Search > Personal Notes, or Search > Text Notes."
      , videoSearchTextText: "You can search the liturgical and biblical texts.  On the menu bar, click Search > Text. Further down on this page is a larger section on 'How to Search the Database', which provides you detailed information."
      , videoCreateTagText: "You can add tags to notes.  This will allow you to find notes that have a tag you are interested in."
      , videoTagSearchText: "You can search notes using tags.  In the menu, select Search.  You can search 'Personal Notes' or 'Text Notes'."
      , videoNoteDownloadText: "You can download your notes.  In the menu, select the user icon (it looks like a person), then select 'My Records'."
      , videoGrammarText: "The Grammar Explorer provides quick links to lexicons. If available for the text you are viewing, there will also be a Dependency Diagram that provides both morphological and syntactic information. If you are authorized, there is a Tagger tool that allows you to annotate each word with its grammatical tags and dependency information."
    }
  }
    , el: {
    home: {
      p1: "Καλωσήρθατε στους μεταφραστές των λειτουργικών κειμένων, και τους μαθητευόμενους που δημιουργούν πηγές για να μας βοηθήσουν να καταλάβουμε το νόημα των κειμένων!"
      , p2: "Μέσω των προσευχών των Αγίων Υμνογράφων Κοσμά του Μελωδού, Ιωάννη της Δαμασκού και Νικοδήμου του Αγιορείτη, είθε η δουλειά μας να γίνει με τη βοήθεια του Θεού, από Αυτόν και μέσω Αυτού, στη δόξα και την τιμή Του!"
      , msg1: "Κατά καιρούς, χρειάζεται να ενημερώνουμε τη διαδικτυακή εφαρμογή ή τη βάση δεδομένων. Αν ξαφνικά δείτε μηνύματα σχετικά με σφάλματα δικτύου ή κάτι άλλο, περιμένετε μερικά λεπτά και δοκιμάστε ξανά."
    }
    , paratexts: {
      menu: "Παράλληλα Κείμενα"
    }
    , myRecords: {
      p1: "Πατήστε το παρακάτω πλήκτρο για να κάνετε λήψη των καταχωρήσεων στην προσωπική σας βιβλιοθήκη. Το αρχείο θα έχει την επέκταση .json. Οι καταχωρήσεις μορφοποιούνται χρησιμοποιώντας json. Μπορείτε να ανοίξετε το αρχείο χρησιμοποιώντας οποιοδήποτε πρόγραμμα επεξεργασίας κειμένου."    }
    , texts: {
      menu: "Κείμενα"
      , itemNew: "Νέο Μέρος Κειμένου"
      , itemSearch: "Αναζήτηση μερών κειμένου"
    }
    , notes: {
      menu: "Σημειώσεις"
      , itemNew: "Νέα σημείωση"
      , itemSearch: "Αναζήτηση Σημειώσεων"
    }
    , links: {
      menu: "Σύνδεσμος"
      , itemNew: "Νέος Σύνδεσμος Κειμένου"
      , itemSearch: "Αναζήτηση Συνδέσμων Κειμένου"
    }
    , add: {
      menu: "Προσθήκη"
      , itemEntity: "Φορέας"
      , itemLink: "Σύνδεσμος"
      , itemNote: "Σημείωση"
      , itemText: "Κείμενο"
      , itemTopic: "Θέμα"
    }
    , administer: {
      menu: "Διαχειριστής"
    }
    , edit: {
      menu: "Επεξεργασία"
      , itemAges: "Χρήση του AGES"
      , itemOslw: "Χρήση του OSLW"
      , itemTopic: "Χρήση του Topic"
      , itemSchEditor: "Χρήση του Schema Editor"
    }
    , generate: {
      menu: "Δημιουργία"
      , itemAges: "Χρήση του AGES"
      , itemOslw: "Χρήση του OSLW"
    }
    , search: {
      menu: "Αναζήτηση"
      , itemLink: "Σύνδεσμοι"
      , itemNote: "Σημειώσεις"
      , itemOntology: "Οντολογία"
      , itemText: "κείμενα"
      , itemTextNote: "Σημειώσεις κειμένου"
    }
    , about: {
      title: "Σχετικά με το OLW"
      , p1: "Το Online Liturgical Workstation (OLW) ιδρύθηκε και διατηρείται από το προσωπικό του Ορθόδοξου Χριστιανικού Αποστολικού Κέντρου."
      , p2: "Αυτό είναι Παν-Ορθόδοξο,διαθέσιμο για όλες τις κανονικές δικαιοδοσίες της Ανατολικής Ορθόδοξης Χριστιανικής Εκκλησίας παγκοσμίως."
      , p3: "Σκοπός του OLW είναι να εξασφαλίσει ένα ασφαλές περιβάλλον για όσους θέλουν να δημιουργήσουν, να διαχειριστούν και να δημοσιεύσουν μεταφράσεις λειτουργικών κειμένων από την Ανατολική Ορθόδοξη Εκκλησία. Επίσης, μπορεί να χρησιμοποιηθεί για άλλου είδους υλικό, όπως καθημερινή ανάγνωση, εκπαιδευτική ή κατηχητικά κείμενα."
      , p4: "Οι νέοι λογαριασμοί χρηστών δημιουργούνται από τους διαχειριστές που επαληθεύουν την ταυτότητα του ατόμου και την ανάγκη του για πρόσβαση στο σύστημα. Κατά τη διάρκεια των δοκιμών beta, δεν θα λαμβάνονται αιτήματα πρόσβασης.."
      , userFeaturesTitle: "Χαρακτηριστικά για χρήστες του OLW "
      , userFeaturesIntro: "Το OLW  παρέχει στους χρήστες τη δυνατότητα να..."
      , userFeature01: "Δημιουργήστε ή επικολλήστε την ίδια τη μετάφραση ενώ βλέπετε την ελληνική πηγή του κειμένου και μεταφράσεις του κειμένου."
      , userFeature02: "Δείτε γραμματικές πληροφορίες  σχετικά με το ελληνικό κείμενο."
      , userFeature03: "Προβολή σημειώσεων από μελετητές και άλλους μεταφραστές."
      , userFeature04: "Υποβολή μετάφρασης για έλεγχο ή/και έγκριση."
      , userFeature05: "Δημιουργήστε και κατεβάστε ένα PDF για βιβλίο ή υπηρεσία, με μία, δύο ή τρεις μεταφράσεις τη μία δίπλα στην άλλη."
      , userFeature06: "Παραγωγή σημειώσεων ορατές στους αναγνώστες της μετάφρασης."
      , userFeature07: "Παραγωγή σημειώσεων για προσωπική χρήση, οι οποίες θα είναι ορατές μόνο από το συγκεκριμένο χρήστη εκτός εαν αυτός/αυτή θέλει να το μοιραστεί με άλλους."
      , aboutVideo01: "Αυτό το βίντεο εξηγεί πως να χρησιμοποιήσετε το OLW εξοικονομώντας χρόνο και μειώνοντας λάθη κατά της είσοδο στις μεταφράσεις και τη δημιουργία υπηρεσιών και βιβλίων."
      , annotatorFeaturesTitle: "OLW Δυνατότητες για σχολιαστές"
      , annotatorFeaturesIntro: "Το OLW παρέχει στους ερευνητές τη δυνατότητα να σχολιάσουν λειτουργικά κείμενα με..."
      , annotatorFeature01: "γραμματικές πληροφορίες (γραμματικές ετικέτες και διαγράμματα εξάρτησης.);"
      , annotatorFeature02: "αναφορές σε οντολογικές υπάρξεις όπως ο Θεός, οι εκδηλώσεις, ο  άνθρωπος, τα μυστήρια, οι τόποι κ.τ.λ."
      , annotatorFeature03: "αναφορές σε Βιβλικά κείμενα."
      , annotatorFeature04: "ερμηνευτική πληροφορία."
      , annotatorFeature05: "συμβουλή στους μεταφραστές."
      , securityFeaturesTitle: "Χαρακτηριστικά ασφαλείας του OLW"
      , securityFeaturesIntro: "Το OLW παρέχει μία ποικιλία χαρακτηριστικών ασφαλείας:"
      , securityFeature01: "Οι λογαριασμοί των χρηστών δημιουργούνται από τους διαχειριστές οι οποίοι μπορούν να επιβεβαιώσουν προσωπικά την ταυτότητα του χρήστη."
      , securityFeature02: "Η πρόσβαση στο OLW απαιτεί την είσοδο έγκυρου ονόματος χρήστη και κωδικού πρόσβασης."
      , securityFeature02b: "Μόνο εσείς μπορείτε να δείτε τα δεδομένα σας και αυτών που τους επιτρέπεται η πρόσβαση."
      , securityFeature03: "Όλες οι καταχωρήσεις στη βάση δεδομένων ομαδοποιούνται στις βιβλιοθήκες."
      , securityFeature04: "Όλες οι καταχωρήσεις έχουν πεδίο κατάστασης: Επιμέλεια, Πρόχειρα. Έτοιμα προς Επανεξέταση.  Έτοιμα προς Επιμέλεια.,Έτοιμα προς Οριστικοποίηση, Έτοιμα προς Δημοσίευση.  Αυτές οι καταστάσεις ελέγχουν τον κύκλο-ζωής της καταχώρησης και τη ροή εργασίας στη διαχείριση της καταχώρησης."
      , securityFeature05: "Όλες οι καταχωρήσεις έχουν ένα πεδίο προβολής:Προσωπικό,Ιδιωτικό, ή Δημόσιο. Αν η προβολή είναι «Προσωπική», μόνο ο διαχειριστής βιβλιοθήκης μπορεί να το δεί ή να το διορθώσει. Αν η προβολή είναι «Ιδιωτική», μόνο όσοι έχουν πρόσβαση μπορούν να το δουν ή να το διορθώσουν. Αν η προβολή είναι«Δημόσια», όλοι μπορούν να το δουν."
      , securityFeature06: "Όταν η κατάσταση της καταχώρησης είναι «Δημοσίευση», αυτόματα αντιγράφεται σε μία ξεχωριστή βάση δεδομένων μόνο για ανάγνωση. Αν η προβολή είναι «Δημόσια», οποιοσδήποτε μπορεί να το δει στη συγκεκριμένη βάση δεδομένων."
      , securityFeature07: "Όταν η καταχώρηση δημιουργείται ή ενημερώνεται, η καταχήρηση περιέχει το όνομα χρήστη, την ημερομηνία και την ώρα στην οποία η καταχώρηση δημιουργήθηκε και/ή ενημερώθηκε.  Είναι δυνατό να ορίζεται κάθε βήμα της διαδικασίας, ποιος τροποποιεί, τι και πότε."
      , securityFeature08: "Πολλαπλά αντίγραφα ασφαλείας θα δημιουργούνται από κάθε βάση δεδομένων. Η πρόσβαση στα αντίγραφα είναι ασφαλής."
    }
    , help: {
      title: "Βοήθεια"
      , intro: "Παρακάτω θα βρείτε οδηγίες για το πως να κάνετε διάφορα πράγματα. Επίσης υπάρχουν και βίντεο. Ακόμα κι αν δε συνηθίζετε να βλέπετε βίντεο για το πως να χρησιμοποιείτε ένα λογισμικό, παρακαλούμε να δείτε το βίντεο στο αν Grammar Explorer.  Είναι σημαντικό να διαβάσετε την ενότητα με τίτλο «Πως να ψάχνετε στη Λειτουργική Βάση Δεδομένων. Θα σας βοηθήσει να κατανοήσετε καλύτερα πως λειτουργεί η βάση δεδομένων."
      , videos: "Πως να..."
      , videoWarning: "Μπορεί να χρειαστούν μερικά δευτερόλεπτα ή και παραπάνω για να φορτώσει το βίντεο.Πόσο θα διαρκέσει εξαρτάται από την ταχύτητα του δικτύου σας. Αν ένα βίντεο δεν αρχίσει να παίζει κατευθείαν, παρακαλώ περιμένετε. Αν δείτε έναν περιστρεφόμενο τροχό στο βίντεο, προχωρήστε  πληκτρολογώντας το πλήκτρο εκκίνησης."
      , videoLogon: "Πως κάνετε σύνδεση και αποσύνδεση"
      , videoLogonText: "Πληκτρολογήστε το «πρόσωπο» στα δεξιά της στήλης του καταλόγου. Έπειτα πληκτρολογήστε «Σύνδεση». Πηγαίνετε στον ίδιο κατάλογο για «Αποσύνδεση»."
      , videoMenuOverview: "Επισκόπηση των θεμάτων στον κατάλογο"
      , videoMenuOverviewText: "Η στήλη του καταλόγου παρέχει διάφορα εργαλεία που είναι διαθέσιμα.  Αφού συνδεθείτε θα δείτε περισσότερες επιλογές."
      , videoChangeLanguage: "Πως αλλάζει η γλώσσα του περιβάλλοντος χρήστη"
      , videoChangeLanguageText: "Για να αλλάξετε τη γλώσσα του περιβάλλοντος χρήστη, πληκτρολογήστε τη σημαία που αντιστοιχεί στη γλώσσα που αναζητάτε. Επικοινωνήστε μαζί μας αν θέλετε να μας βοηθήσετε να προσθέσουμε τη γλώσσα σας στο περιβάλλον χρήστη."
      , videoDailyReadings: "Πως να δημιουργήσετε τα καθημερινά κείμενα"
      , videoDailyReadingsText: "Αναφορικά με τις Καθημερινές Αναγνώσεις, σημειώστε ότι υπάρχουν αντικαταστάτες για τις γιορτές ή τη μνήμη των αγίων [saint/com] και για αφηγηματικές περιγραφές των εορτών ή της ζωής των αγίων [paragraph]. Μπορείτε να τα συμπληρώσετε αυτά για τη δικιά σας συγκεκριμένη γλώσσα. Αν δεν καταχωρήσετε έναν εορτασμό ή μία παράγραφο, θα αφαιρεθεί όταν θα δημιουργηθούν οι καθημερινές αναγνώσεις"
      , videoSelectService: "Πως να επιλέξετε μια Υπηρεσία ή ένα Λειτουργικό Βιβλίο από το AGES DCS"
      , videoSelectServiceText: "Τόσο ο Συντάκτης όσο και ο Δημιουργός σας επιτρέπουν να επιλέξετε μια υπηρεσία AGES ή ένα πρότυπο βιβλίου. Αυτά τα πρότυπα μπορούν να χρησιμοποιηθούν εκ νέου για κάθε γλώσσα που υπάρχει στη βάση δεδομένων"
      , videoGenerateService: "Πως να δημιουργήσετε μια υπηρεσία ή ένα λειτουργικό βιβλίο"
      , videoGenerateServiceText: "Μπορείτε να δημιουργήσετε υπηρεσίες ή βιβλία για έν, δύο ή τρεις γλώσσες τη μία δίπλα στην άλλη. Αν κάποιο μέρος δεν έχει μεταφραστεί ακόμη για τη γλώσσα που επιλέξατε, θα βρείτε αντ' αυτού Αγγλικά ή Ελληνικά. Αυτές ονομάζονται «εφεδρικές» γλώσσες."
      , videoEnterTranslation: "Πως να εισάγεται μια μετάφραση"
      , videoEnterTranslationText: "Μπορείτε να εισάγετε τη μετάφραση των κειμένων από τις βιβλιοθήκες στις οποίες έχετε πρόσβαση. Επιλέξτε Συντάκτης > Χρησιμοποιείστε AGES DCS, έπειτα επιλέξτε το πρότυπο που θέλετε να χρησιμοποιήσετε και τη βιβλιοθήκη για την οποία μεταφράζετε."
      , videoCreateNote: "Πως να δημιουργήσετε μια σημείωση"
      , videoCreateNoteText: "Αν έχετε πρόσβαση, όταν είστε στο Συντάκτη του κειμένου, μπορείτε να δημιουργήσετε σημειώσεις σχετικά με το κείμενο."
      , videoSearchNotes: "Πως να κάνετε αναζήτηση κειμένων"
      , videoSearchNotesText: "Μπορείτε να αναζητήσετε το περιεχόμενο των σημειώσεων. Στη στήλη καταλόγου, πληκτρολογήστε Αναζήτηση> Προσωπικές Σημειώσεις ή Αναζήτηση > Σημειώσεις Κειμένων"
      , videoSearchText: "Πως να κάνετε αναζήτηση σημειώσεων"
      , videoSearchTextText: "Μπορείτε να αναζητήσετε Λειτουργικά και Βιβλικά κείμενα. Στη στήλη καταλόγου, πληκτρολογήστε Αναζήτηση> Κείμενο. Παρακάτω στην ίδια σελίδα υπάρχει μια μεγαλύτερη ενότητα «Πώς να κάνετε Αναζήτηση στη Βάση Δεδομένων, η οποία σας παρέχει περισσότερες πληροφορίες."
      , videoCreateTag: "Πως να δημιουργήσετε ή να διορθώσετε τις ετικέτες των σημειώσεων"
      , videoCreateTagText: "Μπορείτε να προσθέσετε μια ετικέτα στις σημειώσεις. Αυτό θα σας επιτρέψει να βρείτε σημειώσεις που έχουν την ετικέτα για την οποία ενδιαφέρεστε"
      , videoTagSearch: "Πως να χρησιμοποιείτε  τις ετικέτες για την αναζήτηση σημειώσεων"
      , videoTagSearchText: "Μπορείτε να αναζητήσετε σημειώσεις χρησιμοποιώντας ετικέτες. Στον κατάλογο, επιλέξτε Αναζήτηση.  Μπορείτε να αναζητήσετε «Προσωπικές σημειώσεις» ή «Κείμενα Σημειώσεων»."
      , videoNoteDownload: "Πως να κάνετε λήψη των σημειώσεων ως json"
      , videoNoteDownloadText: "Μπορείτε να κατεβάσετε τις σημειώσεις σας. Στον κατάλογο, επιλέξτε την εικόνα χρήστη (μοιάζει με πρόσωπο), έπειτα επιλέξτε «Οι Καταχωρήσεις μου»."
      , videoGrammar: "Πως να χρησιμοποιείτε το Grammar Explorer"
      , videoGrammarText: "Το Grammar Explorer παρέχει εύκολες συνδέσεις σε λεξικά. Είναι διαθέσιμο  για το κείμενο που βλέπετε, θα υπάρχει ένα Διάγραμμα Εξάρτησης που παρέχει μορφολογικές και συντακτικές πληροφορίες. Αν έχετε πρόσβαση, υπάρχει ένα εργαλείο Tagger που σας επιτρέπει να δείτε τις υποσημειώσεις κάθε λέξης με τις γραμματικές ετικέτες και την πληροφορία εξάρτησης."    }
  }
};

module.exports = {
  localLabels : labels
  , getAllLabels: (code) => {
    return labels[code];
    }
  , getAboutHomeLabels: (code) => {
    return labels[code].home;
  }
  , getAboutOlwLabels: (code) => {
    return labels[code].about;
  }
  , getHelpLabels: (code) => {
    return labels[code].help;
  }
  , getMyRecordsLabels: (code) => {
    return labels[code].myRecords;
  }
};
