import React from 'react'

const StudyNotes = () => {
  return (
     <section className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <h2 className="text-xl font-semibold mb-4">Study Notes</h2>
          <div className="space-y-4">
            <p>
              The Delhi Sultanate (1206-1526) was a period of Muslim rule in India 
              that saw five dynasties: Slave (Mamluk), Khilji, Tughlaq, Sayyid, and 
              Lodi. Each dynasty contributed significantly to India's administrative, 
              cultural, and architectural development.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Key Dynasty Timeline</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Slave Dynasty (1206-1290)</li>
                  <li>• Khilji Dynasty (1290-1320)</li>
                  <li>• Tughlaq Dynasty (1320-1414)</li>
                  <li>• Sayyid Dynasty (1414-1451)</li>
                  <li>• Lodi Dynasty (1451-1526)</li>
                </ul>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Important Rulers</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Qutub-ud-din Aibak</li>
                  <li>• Iltutmish</li>
                  <li>• Balban</li>
                  <li>• Alauddin Khilji</li>
                  <li>• Muhammad bin Tughlaq</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}

export default StudyNotes