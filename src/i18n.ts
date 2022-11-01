import i18n from "i18next";

i18n.init({
  lng: localStorage["language"] ?? "en",
  debug: true,
  resources: {
    en: {
      translation: {
        "Your daily habits": "Your daily habits",
        Home: "Home",
        "Daily habits": "Daily habits",
        "Hello!": "Hello!",
        "Establish your habits": "Establish your habits",
        "Accroding to studies it takes 21 days to establish a new habit. Change your life by starting today!":
          "Accroding to studies it takes 21 days to establish a new habit. Change your life by starting today!",
        "Start now": "Start now",
        "Add new habit": "Add new habit",
        Habit: "Habit",
        Recurrence: "Recurrence",
        Frequency: "Frequency",
        Reminder: "Reminder",
        Confirm: "Confirm",
        "Select an option": "Select an option",
        Drinking: "Drinking",
        Walking: "Walking",
        Reading: "Reading",
        Sleeping: "Sleeping",
        Eating: "Eating",
        Exercise: "Exercise",
        "Ones a day": "Ones a day",
        "Twice a day": "Twice a day",
        "Three times a day": "Three times a day",
        "Four times a day": "Four times a day",
        "Five times a day": "Five times a day",
        "Six times a day": "Six times a day",
        "Seven times a day": "Seven times a day",
        "Ones a week": "Ones a week",
        "Twice a week": "Twice a week",
        "Three times a week": "Three times a week",
        "Four times a week": "Four times a week",
        "Five times a week": "Five times a week",
        "Six times a week": "Six times a week",
        "Seven times a week": "Seven times a week",
        "Ones a month": "Ones a month",
        "Twice a month": "Twice a month",
        "Three times a month": "Three times a month",
        "Four times a month": "Four times a month",
        "Five times a month": "Five times a month",
        "Six times a month": "Six times a month",
        "Seven times a month": "Seven times a month",
        Daily: "Daily",
        Weekly: "Weekly",
        Monthly: "Monthly",
        Yes: "Yes",
        No: "No",
        Login: "Login",
        Password: "Password",
        "Deleting habit": "Deleting habit",
        "Are you sure you want to delete this habit?":
          "Are you sure you want to delete this habit?",
        Delete: "Delete",
        Cancel: "Cancel",
        "Habits summary": "Habits summary",
        "Weekly habits": "Weekly habits",
        "Soon to be": "Soon to be",
        "Your weekly habits": "Your weekly habits",
        "You haven't set your daily habits yet. Start your dailychallange today!":
          "You haven't set your daily habits yet. Start your dailychallange today!",
        "You haven't set your weekly habits yet. Start your dailychallange today!":
          "You haven't set your weekly habits yet. Start your dailychallange today!",
        "Your habits": "Your habits",
      },
    },
    "pl-PL": {
      translation: {
        "Your daily habits": "Twoje codzienne nawyki",
        Home: "Strona startowa",
        "Daily habits": "Codzienne nawyki",
        "Hello!": "Cześć!",
        "Establish your habits": "Ustal swoje nawyki        ",
        "Accroding to studies it takes 21 days to establish a new habit. Change your life by starting today!":
          "Według badań wyrobienie nowego nawyku zajmuje 21 dni. Zmień swoje życie, zaczynając już dziś!",
        "Start now": "Rozpocznij teraz",
        "Add new habit": "Dodaj nowy nawyk",
        Habit: "Nawyk",
        Recurrence: "Powtarzalność",
        Frequency: "Częstotliwość",
        Reminder: "Przypomnienie",
        Confirm: "Potwierdź",
        "Select an option": "Wybierz opcję",
        Drinking: "Picie wody",
        Walking: "Spacery",
        Reading: "Czytanie",
        Sleeping: "Spanie",
        Eating: "Jedzenie",
        Exercise: "Trening",
        "Ones a day": "Raz dziennie",
        "Twice a day": "Dwa razy dziennie",
        "Three times a day": "Trzy razy dziennie",
        "Four times a day": "Cztery razy dziennie",
        "Five times a day": "Pięć razy dziennie",
        "Six times a day": "Sześć razy dziennie",
        "Seven times a day": "Siedem razy dziennie",
        "Ones a week": "Raz na tydzień",
        "Twice a week": "Dwa razy na tydzień",
        "Three times a week": "Trzy razy na tydzień",
        "Four times a week": "Cztery razy na tydzień",
        "Five times a week": "Pięć razy na tydzień",
        "Six times a week": "Sześć razy na tydzień",
        "Seven times a week": "Siedem razy na tydzień",
        "Ones a month": "Raz na miesiąc",
        "Twice a month": "Dwa razy na miesiąc",
        "Three times a month": "Trzy razy na miesiąc",
        "Four times a month": "Cztery razy na miesiąc",
        "Five times a month": "Pięć razy na miesiąc",
        "Six times a month": "Sześć razy na miesiąc",
        "Seven times a month": "Siedem razy na miesiąc",
        Daily: "Dziennie",
        Weekly: "Tygodniowo",
        Monthly: "Miesięcznie",
        Yes: "Tak",
        No: "Nie",
        Login: "Login",
        Password: "Hasło",
        "Deleting habit": "Usuwanie nawyku",
        "Are you sure you want to delete this habit?":
          "Czy jesteś pewien, że chcesz usunąć te nawyk?",
        Delete: "Usuń",
        Cancel: "Anuluj",
        "Habits summary": "Podsumowanie nawyków",
        "Weekly habits": "Tygodniowe nawyki",
        "Soon to be": "Wkrótce dostępne",
        "Your weekly habits": "Twoje tygodniowe nawyki",
        "You haven't set your daily habits yet. Start your dailychallange today!":
          "Nie ustaliłeś jeszcze swoich codziennych nawyków. Zacznij swoje codzienne wyzwanie już dziś!",
        "You haven't set your weekly habits yet. Start your dailychallange today!":
          "Nie ustaliłeś jeszcze swoich tygodniowych nawyków. Zacznij swoje codzienne wyzwanie już dziś!",
        "Your habits": "Twoje nawyki",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

export default i18n;
