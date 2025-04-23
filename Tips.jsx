import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TipsCard = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const TipsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 1rem;
`;

const TipText = styled.div`
  background: #eef2ff;
  border-left: 4px solid #6366f1;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #374151;
  font-size: 0.95rem;
`;

const savingTips = [
  "🍱 Pack lunch instead of eating out – saves ₹1000+ monthly!",
  "📚 Borrow books from the library or seniors before buying new ones.",
  "🛍️ Wait for sales or use student discounts when shopping.",
  "🚶‍♂️ Walk or cycle instead of using autos for short distances.",
  "☕ Cut down on daily café coffee – make your own!",
  "📅 Plan your monthly budget and track weekly.",
  "📲 Use Wi-Fi instead of mobile data to save on recharges.",
  "🎉 Split party expenses – don’t foot the whole bill alone!",
  "👕 Reuse and mix-match outfits – fashion on a budget!",
  "🧠 Need vs Want: Always question before buying anything."
];

const Tips = () => {
  const [dailyTip, setDailyTip] = useState("");

  useEffect(() => {
    const today = new Date().toDateString(); // e.g. "Sat Apr 13 2025"
    const storedTip = localStorage.getItem("dailyTip");
    const storedDate = localStorage.getItem("tipDate");

    if (storedDate === today && storedTip) {
      setDailyTip(storedTip); // Use saved tip for today
    } else {
      const tipIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % savingTips.length;
      const newTip = savingTips[tipIndex];
      setDailyTip(newTip);
      localStorage.setItem("dailyTip", newTip);
      localStorage.setItem("tipDate", today);
    }
  }, []);

  return (
    <TipsCard>
      <TipsTitle>💡 Today's Saving Tip</TipsTitle>
      <TipText>{dailyTip}</TipText>
    </TipsCard>
  );
};

export default Tips;