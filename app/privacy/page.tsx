export default function PricacyPage() {
  return (
    <main className="flex flex-col prose container py-16">
      <h1>Privacy Policy</h1>

      <h2>Introduction</h2>
      <p>
        NoteBeam values your privacy. This Privacy Policy explains how we handle
        and protect your personal data.
      </p>

      <h2>Collection of Personal Data</h2>
      <p>
        We collect personal data to provide better services. The personal data
        we collect is divided into two main categories:
      </p>

      <h3>1. Data Stored in IndexedDB (on the User's Device)</h3>
      <p>
        All notes you create and store are saved in IndexedDB on your device.
        This data is not automatically sent or shared with third parties.
      </p>

      <h3>2. Data Stored in the Cloud</h3>
      <p>
        Your notes are uploaded to the cloud when you choose to share them. This
        data can be accessed by anyone who has the unique token generated when
        you share a note.
      </p>

      <h2>Purpose of Data Use</h2>
      <p>Your personal data will be used for the following purposes:</p>
      <ul>
        <li>To store and display the notes you create</li>
        <li>To share notes with others using a token</li>
      </ul>

      <h2>Disclosure of Personal Data</h2>
      <p>
        We will not disclose your personal data to third parties unless you
        choose to share a note. The sharing process uses a unique token that you
        generate.
      </p>

      <h2>Retention of Personal Data</h2>
      <p>
        Your notes are stored in IndexedDB on your device and in the cloud when
        you choose to share them. When you cancel sharing or delete a note, the
        data stored in the cloud will also be deleted.
      </p>

      <h2>Security of Personal Data</h2>
      <p>
        We have appropriate measures in place to protect your personal data from
        unauthorized access, leaks, alterations, or destruction. However, we are
        not responsible for any data leaks.
      </p>

      <h2>Usage Precautions</h2>
      <p>
        To prevent personal data leaks, you should not use NoteBeam to store
        sensitive information such as financial data, health data, or
        confidential information.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access and correct your personal data. You can
        delete notes and cancel sharing at any time.
      </p>

      <h2>Changes to the Privacy Policy</h2>
      <p>
        We reserve the right to update or change this Privacy Policy at any
        time. Any changes will be notified to you through the app or website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at&nbsp;
        <a href="mailto:muc5674@gmail.com">muc5674@gmail.com</a>.
      </p>

      <hr />
      <p>
        <strong>NoteBeam</strong> - Fast, Seamless, and Secure Note Sharing
      </p>
    </main>
  );
}
