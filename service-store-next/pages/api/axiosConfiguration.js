/**
 * Configuration for axios
 * Σε αυτό το σημείο γίνεται initialize του profile μας για το axios
 *
 * Ορίζεται το baseURL καθώς και οποιαδοίποτε άλλο header ώστε να μην χρειάζεται να κάνουμε
 * καθε φορά import όλες τις παραμέτρους σε κάθε request
 *
 * Για να χρησιμοποιήσουμε το axios  με το profile αρκεί να το κάνουμε import απο αυτό το αρχείο
 */

import axios from "axios";
const instance = axios.create({
  baseURL: "http://islab-thesis.aegean.gr:82/api",
});
const devteam2 = axios.create({
  baseURL: "http://islab-thesis.aegean.gr:82/trans/api",
});

export { instance, devteam2 };
