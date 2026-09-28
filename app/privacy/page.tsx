import Link from "next/link";

export const metadata={title:"Privacy — NutClue",description:"How NutClue handles account data and learning content."};

export default function PrivacyPage(){
 return <main className="privacyPage" dir="auto">
  <section className="privacyCard">
   <Link href="/" className="authBrand">NUT<span>CLUE</span></Link>
   <small>PRIVACY, IN PLAIN LANGUAGE</small>
   <h1>Your data stays yours.</h1>
   <p>NutClue keeps public learning and games open to everyone. An account is only needed when you choose to save personal notes, questions or visit context.</p>
   <h2>What we store</h2>
   <p>Saved entries are linked to your account and contain the category, the note you wrote and the time you selected. We do not use personal notes for public profiles or leaderboards.</p>
   <h2>Your controls</h2>
   <p>You can review, edit and delete entries from your Journal. You can also export your journal as a JSON file from the signed-in Journal view. Contact the project owner if you need an account-level deletion request.</p>
   <h2>Health boundary</h2>
   <p>NutClue is educational and organizational. It does not diagnose, interpret results, calculate insulin or replace an individualized care plan.</p>
   <Link href="/" className="privacyBack">Back to NutClue →</Link>
  </section>
 </main>
}

