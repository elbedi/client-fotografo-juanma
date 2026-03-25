const streamItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_q-7w2PKRD1yswgrFwdOSSNSfWMTfHti2Q7Kued0CT-y82uC6sBC47JzJKkXs_vr8_FbkIea_D2LFHbkd41UAOApilJwWAjoVVXUT1hdgRJiSywNFRwyuRSEf_GGxjs7CdsojNcjnXwPzSoblW6n6JMaOyDkKn1HNgjhbPHXTTDlwx33wZf3BE9CxXJxq6vTkEUwFhgo_OCXAmw2pDPzsRdQC4ztDt3n85dqwJ2S431os9tZf5dXZ5lIe1-fSAR0-xdmkLFNF5Kos",
    alt: "Arquitectura cinematografica",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvemUO9A3rOc6iVVMpobqVksllTBgHQdxssNnnq2v6C_m_XtHCyRtgAho1H2N0ejg6hEAFMiteH3pblerqOINWXQ3-1LdrMwJ5h4rFv0Q7cYY2JC7fjlBQ-GTjNtjnGynYJttNwdqGRxE5Kk8jlmkoYQ2X1_xpzATfV3aynSY6_fZR6PZKLMmzhhSbei_zk3Aeq4cFfoSm_Dx__xsKZoL-qulZHGysePDwCRJAxshp4BIqFhUCXSqiEcC_VWjlY83n2x3wno3GBRHO",
    alt: "Auto cyberpunk",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzBlpiYG-Id6F6stakxeTuuh3j_YlXk8lvgicXbeiRZlLOL5qLCW8NTFgJqWRhtj9UyeRcITrCLdAWrlvMdQrFLNNvoIAP1ocMvlpLpcDqcQcATLmv2TuaE_0nXFcXlAbXK0BaGOtMzfvDKdxkGQwnHRgJton6mMKVZlCXCixsMMt0oSrqGkimFkdCWOCJTyjbCthkEWNJtXMla08WHCFWulDXDgD24v-Wj_RCfn-1iYt981pk6SmEEZb2E75HSgB7JYvyQ2mvxpxY",
    alt: "Abstraccion neon",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsVUJ2liTsZ4AesuVzbcJ16c-ouOQU1K2helP7cUNeLzu8VTX4rOibTVHBg8sJU0gqRiYrqBm9jh7D_NfnZfhzBHDzl574kcYzYzAz70B4dAjI90u3M9BNW4Fzuq42OrYBNI7s0KYZ14FBJQcbd0Nj8ZtNhNZc9uA35xSeP8hTVaBc4yGEe4xbmhBk16CFgcKgYa-G5Xct3CmjiC2WT-aM38GJ1O0EDnNi0g59ow8btmxLuWZh615iskyk7IdeULIevkU76Wm4JjSB",
    alt: "Calle cyberpunk",
  },
];

export default function FeedSection() {
  return (
    <section id="feed" className="overflow-hidden bg-background py-32">
      <div className="mb-12 px-6">
        <span className="mb-2 block font-label text-sm text-primary-fixed">05 // FLUJO</span>
        <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase">Flujo_Visual</h2>
      </div>
      <div className="no-scrollbar flex snap-x space-x-8 overflow-x-auto px-6 pb-12">
        {streamItems.map((item) => (
          <div
            key={item.image}
            className="aspect-video w-[80vw] flex-none snap-center overflow-hidden bg-surface-container-high md:w-[40vw]"
          >
            <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
