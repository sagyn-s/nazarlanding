
// interface AdvantageItem {
//   Advantage: string;
//   Nazarai: string;
//   Zoomiq: string;
//   Affectiva: string;
// }

// interface TableProps {
//   data: AdvantageItem[];
// }

export const Table = () => {
  return (
    <div className="h-[30rem] md:h-[50rem] w-full flex items-center justify-center relative">
      <table className="table-auto border-collapse w-4/5">
        <thead>
          <tr>
            <th className="border px-4 py-2">Advantage</th>
            <th className="border px-4 py-2">Nazar AI</th>
            <th className="border px-4 py-2">Zoom IQ</th>
            <th className="border px-4 py-2">Affectiva</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="border px-4 py-2">Tracking  students' emotions</td>
              <td className="border px-4 py-2">✓ Uses Face Emotion Recognition (FER)</td>
              <td className="border px-4 py-2">❌ Not specialized in emotion tracking</td>
              <td className="border px-4 py-2">✓ Provides Emotion SDK for analysis</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tracking students' head positions</td>
              <td className="border px-4 py-2">✓ Uses Head Pose Estimation (HPE)</td>
              <td className="border px-4 py-2">❌ Not specialized in head pose estimation</td>
              <td className="border px-4 py-2">❌ Not specialized in head pose estimation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Revealing learning characteristics</td>
              <td className="border px-4 py-2">✓ Data analysis using ChatGPT4</td>
              <td className="border px-4 py-2">❌ Focuses on recording and transcribing</td>
              <td className="border px-4 py-2">❌ Not specialized in learning characteristics</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Analyzing emotional indicators</td>
              <td className="border px-4 py-2">✓ Collects emotional data during lessons</td>
              <td className="border px-4 py-2">❌ Lacks focus on emotional indicators</td>
              <td className="border px-4 py-2">✓ Provides Emotion SDK for analysis</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Identifying student distractions</td>
              <td className="border px-4 py-2">✓ Tracks when students are distracted</td>
              <td className="border px-4 py-2">❌ Lacks focus on student distractions</td>
              <td className="border px-4 py-2">❌ Not specialized in identifying distractions</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Evaluating teaching methods</td>
              <td className="border px-4 py-2">✓ Uses GPT4 for method effectiveness</td>
              <td className="border px-4 py-2">❌ Focuses on coaching and conversation metrics</td>
              <td className="border px-4 py-2">❌ Not specialized in teaching method evaluation</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

